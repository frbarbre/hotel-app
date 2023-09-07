export interface Main {
  status: boolean;
  message: string;
  timestamp: number;
  data: {
    sortDisclaimer: string;
    data: Hotel[];
  };
}

export interface Hotel {
  id: number;
  title: string;
  primaryInfo: string;
  secondaryInfo: string;
  badge: {
    size: string;
    type: string;
    year: string;
  };
  bubbleRating: {
    count: string;
    rating: number;
  };
  isSponsored: boolean;
  accentedLabel: boolean;
  provider: string;
  priceForDisplay: any;
  strikethroughPrice: any;
  priceDetails: any;
  priceSummary: any;
  cardPhotos: Image[];
}

export interface Image {
  __typename: string;
  sizes: {
    __typename: string;
    maxHeight: number;
    maxWidth: number;
    urlTemplate: string;
  };
}

export interface Root {
  status: boolean
  message: string
  timestamp: number
  data: Data
}

export interface Data {
  photos: Photo[]
  title: string
  rating: number
  numberReviews: number
  rankingDetails: string
  price: Price
  about: About
  reviews: Reviews
  location: Location
  geoPoint: GeoPoint
  restaurantsNearby: RestaurantsNearby
  attractionsNearby: AttractionsNearby
  qA: QA
  amenitiesScreen: AmenitiesScreen[]
}

export interface Photo {
  maxHeight: number
  maxWidth: number
  urlTemplate: string
}

export interface Price {
  strikeThroughPrice: any
  status: string
  providerName: string
  freeCancellation: any
  pricingPeriod: any
}

export interface About {
  content: Content[]
  tags: string[]
}

export interface Content {
  title: string
  content: Content2[]
}

export interface Content2 {
  title: string
  content?: string
}

export interface Reviews {
  content: Content3[]
  count: number
  ratingValue: number
  ratingCounts: RatingCounts
}

export interface Content3 {
  title: string
  text: string
  bubbleRatingText: string
  publishedDate: string
  userProfile: UserProfile
  photos: Photo2[]
}

export interface UserProfile {
  deprecatedContributionCount: string
  avatar: Avatar
}

export interface Avatar {
  maxHeight: number
  maxWidth: number
  urlTemplate: string
}

export interface Photo2 {
  __typename: string
  link: Link
  photo: Photo3
}

export interface Link {
  __typename: string
  text: any
  accessibilityString: any
  route: Route
  trackingContext: string
  webviewRoute: any
}

export interface Route {
  __typename: string
  page: string
  url: string
  nonCanonicalUrl: string
  fragment: any
  typedParams: TypedParams
}

export interface TypedParams {
  __typename: string
  locationId: number
  locationIdStr: string
  albumId: any
  positionId: any
  from: any
  to: any
  mediaId: number
  mediaType: string
  galleryConfig: string
  entryPoint: string
  reviewId: string
}

export interface Photo3 {
  __typename: string
  photoSizes: PhotoSize[]
  photoSizeDynamic: PhotoSizeDynamic
}

export interface PhotoSize {
  __typename: string
  height: number
  width: number
  url: string
}

export interface PhotoSizeDynamic {
  __typename: string
  maxHeight: number
  maxWidth: number
  urlTemplate: string
}

export interface RatingCounts {
  average: Average
  excellent: Excellent
  poor: Poor
  terrible: Terrible
  veryGood: VeryGood
}

export interface Average {
  percentage: number
  count: string
}

export interface Excellent {
  percentage: number
  count: string
}

export interface Poor {
  percentage: number
  count: string
}

export interface Terrible {
  percentage: number
  count: string
}

export interface VeryGood {
  percentage: number
  count: string
}

export interface Location {
  title: string
  address: string
  neighborhood: Neighborhood
  gettingThere: GettingThere
  walkability: any
}

export interface Neighborhood {}

export interface GettingThere {
  title: string
  content: string[]
}

export interface GeoPoint {
  latitude: number
  longitude: number
}

export interface RestaurantsNearby {
  sectionTitle: string
  content: Content4[]
}

export interface Content4 {
  title: string
  bubbleRating: BubbleRating
  primaryInfo: string
  distance: string
  cardPhoto: CardPhoto
}

export interface BubbleRating {
  rating: number
  numberReviews: string
}

export interface CardPhoto {
  maxHeight: number
  maxWidth: number
  urlTemplate: string
}

export interface AttractionsNearby {
  sectionTitle: string
  content: Content5[]
}

export interface Content5 {
  title: string
  bubbleRating: BubbleRating2
  primaryInfo: string
  distance: string
  cardPhoto: CardPhoto2
}

export interface BubbleRating2 {
  rating: number
  numberReviews: string
}

export interface CardPhoto2 {
  maxHeight: number
  maxWidth: number
  urlTemplate: string
}

export interface QA {
  content: Content6[]
}

export interface Content6 {
  title: string
  writtenDate: string
  memberProfile: MemberProfile
  topAnswer: TopAnswer
}

export interface MemberProfile {
  profileImage: ProfileImage
}

export interface ProfileImage {}

export interface TopAnswer {
  text: string
  writtenDate: string
  thumbsUpCount: number
  memberProfile: MemberProfile2
}

export interface MemberProfile2 {
  displayName: string
  hometown: any
  profileImage: ProfileImage2
  contributionCounts: any
  deprecatedContributionCount: string
}

export interface ProfileImage2 {
  maxHeight: number
  maxWidth: number
  urlTemplate: string
}

export interface AmenitiesScreen {
  title: string
  content: string[]
}
