import blockContent from './blockContent'
import post from './post'
import {seoType} from './seoType'
import {pageType} from './pageType'
import {promotionType} from './promotionType'
import {formType} from './formType'
import {heroWithImageType} from './heroWithImageType'
import {imageGalleryType} from './imageGalleryType'
import {pageType} from './pageType'
import {textWithIllustrationType} from './textWithIllustrationType'
import {videoType} from './videoType'
import {redirectType} from './redirectType'

export const schemaTypes = [
  post,
  blockContent,
  pageType,
  seoType,
  heroWithImageType,
  promotionType,
  textWithIllustrationType,
  imageGalleryType,
  formType,
  redirectType,
  videoType,
]
