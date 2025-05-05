/**
 * Klaviyo API utility functions
 */

/**
 * Subscribe a user to a Klaviyo list
 * @param name - The user's name
 * @param phone - The user's phone number
 * @returns Promise that resolves when the subscription is complete
 */
export async function subscribeToKlaviyoList(name: string, phone: string): Promise<void> {
  const apiKey = process.env.KLAVIYO_API_KEY;
  const listId = process.env.KLAVIYO_LIST;

  if (!apiKey || !listId) {
    throw new Error("Klaviyo API key or list ID not configured");
  }

  // Format the profile data according to Klaviyo's API requirements
  const firstName = name.split(" ")[0];
  const lastName = name.split(" ").slice(1).join(" ") || "";

  // Format phone number to international format
  let formattedPhone = phone;

  // Remove any non-digit characters
  formattedPhone = formattedPhone.replace(/\D/g, "");

  // If the phone doesn't start with +, add the + prefix
  // For US numbers, if it's 10 digits, add +1 prefix
  if (!formattedPhone.startsWith("+")) {
    if (formattedPhone.length === 10) {
      formattedPhone = "+1" + formattedPhone;
    } else {
      formattedPhone = "+" + formattedPhone;
    }
  }

  console.log("Formatted phone for Klaviyo:", formattedPhone);

  try {
    // First, create a profile
    const profileData = {
      data: {
        type: "profile",
        attributes: {
          phone_number: formattedPhone,
          first_name: firstName,
          last_name: lastName,
        },
      },
    };

    console.log("Sending profile data to Klaviyo:", JSON.stringify(profileData, null, 2));

    const profileResponse = await fetch("https://a.klaviyo.com/api/profiles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Klaviyo-API-Key ${apiKey}`,
        revision: "2025-04-15",
      },
      body: JSON.stringify(profileData),
    });

    let profileId;
    let responseJson;

    try {
      responseJson = JSON.parse(await profileResponse.text());

      if (!profileResponse.ok) {
        console.error("Klaviyo profile creation error:", JSON.stringify(responseJson, null, 2));
        throw new Error(
          `Klaviyo profile API error: ${profileResponse.status} ${profileResponse.statusText}`,
        );
      }

      profileId = responseJson.data.id;
      console.log("Klaviyo profile creation success, ID:", profileId);
    } catch (parseError) {
      console.error("Error parsing Klaviyo response:", parseError);
      throw new Error("Failed to parse Klaviyo API response");
    }

    // Now subscribe the profile to the list
    const subscriptionData = {
      data: {
        type: "profile-subscription-bulk-create-job",
        attributes: {
          profiles: {
            data: [
              {
                type: "profile",
                id: profileId,
                attributes: {
                  phone_number: formattedPhone,
                  subscriptions: {
                    // email: { marketing: { consent: "SUBSCRIBED" } },
                    sms: {
                      marketing: { consent: "SUBSCRIBED" },
                      transactional: { consent: "SUBSCRIBED" },
                    },
                  },
                },
              },
            ],
          },
        },
        relationships: {
          list: {
            data: {
              type: "list",
              id: listId,
            },
          },
        },
      },
    };

    console.log("Sending subscription data to Klaviyo:", JSON.stringify(subscriptionData, null, 2));

    const subscribeResponse = await fetch(
      "https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Klaviyo-API-Key ${apiKey}`,
          revision: "2025-04-15",
        },
        body: JSON.stringify(subscriptionData),
      },
    );

    const subscribeText = await subscribeResponse.text();

    if (!subscribeResponse.ok) {
      console.error("Klaviyo subscription error:", subscribeText);
      throw new Error(
        `Klaviyo subscription API error: ${subscribeResponse.status} ${subscribeResponse.statusText}`,
      );
    }

    console.log("Klaviyo subscription success:", subscribeText);
    console.log("Successfully subscribed to Klaviyo list");
  } catch (error) {
    console.error("Error subscribing to Klaviyo list:", error);
    throw error;
  }
}
