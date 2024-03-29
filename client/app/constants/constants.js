export const FB_ID = '1779328982334234';
export const EMAIL_POST = 'http://www.fionaross.co.uk/api/postEmail';

// urls
export const GALLERY_IMAGE_URL = 'http://fionaross.co.uk/images/gallery/';
export const GALLERY_TEMPLATE_URL = '../app/components/gallery/modal.html';
export const NEWS_LIGHTBOX_URL = '../app/components/news/images/'
export const IMAGES_DIRECTORY = '../images/'

// page titles
export const PAGE_TITLE_BASE = 'Fiona Ross';
export const PAGE_TITLE_BASE_SEPARATOR = ' - ';

export const PAGE_TITLE_ABOUT = 'About' + PAGE_TITLE_BASE_SEPARATOR + PAGE_TITLE_BASE;
export const PAGE_TITLE_GIGS = 'Gigs' + PAGE_TITLE_BASE_SEPARATOR + PAGE_TITLE_BASE;
export const PAGE_TITLE_COLLABORATORS = 'Collaborators' + PAGE_TITLE_BASE_SEPARATOR + PAGE_TITLE_BASE;
export const PAGE_TITLE_COLLABORATOR_IND =  PAGE_TITLE_BASE_SEPARATOR + 'Collaborators' + PAGE_TITLE_BASE_SEPARATOR + PAGE_TITLE_BASE;
export const PAGE_TITLE_CONTACT = 'Contact' + PAGE_TITLE_BASE_SEPARATOR + PAGE_TITLE_BASE;
export const PAGE_TITLE_JOURNALISM = 'Journalism' + PAGE_TITLE_BASE_SEPARATOR + PAGE_TITLE_BASE;
export const PAGE_TITLE_GALLERY = 'Gallery' + PAGE_TITLE_BASE_SEPARATOR + PAGE_TITLE_BASE;
export const PAGE_TITLE_GALLERY_SIGNED_PHOTO = 'Signed Photo' + PAGE_TITLE_BASE_SEPARATOR + PAGE_TITLE_BASE;
export const PAGE_TITLE_HOME = PAGE_TITLE_BASE + PAGE_TITLE_BASE_SEPARATOR +  'Jazz Vocalist, Pianist, Composer, Producer and Journalist';
export const PAGE_TITLE_MUSIC = 'Music' + PAGE_TITLE_BASE_SEPARATOR + PAGE_TITLE_BASE;
export const PAGE_TITLE_MUSIC_ALBUM = PAGE_TITLE_BASE_SEPARATOR + PAGE_TITLE_BASE;
export const PAGE_TITLE_MUSIC_ALBUM_REVIEWS = ' Reviews' + PAGE_TITLE_BASE_SEPARATOR + PAGE_TITLE_BASE;
export const PAGE_TITLE_NEWS = 'News' + PAGE_TITLE_BASE_SEPARATOR + PAGE_TITLE_BASE;
export const PAGE_TITLE_PRESS = 'Press' + PAGE_TITLE_BASE_SEPARATOR + PAGE_TITLE_BASE;
export const PAGE_TITLE_VIDEOS = 'Videos' + PAGE_TITLE_BASE_SEPARATOR + PAGE_TITLE_BASE;
export const PAGE_TITLE_PRIVACY_POLICY = 'Privacy Policy' + PAGE_TITLE_BASE_SEPARATOR + PAGE_TITLE_BASE;
export const PAGE_TITLE_REFLECTIONS_IN_BLUE = 'Reflections in Blue by Audrey Ross' + PAGE_TITLE_BASE_SEPARATOR + PAGE_TITLE_BASE;

// api
// export const API_BASE = 'http://localhost:4040/';
export const API_BASE = 'https://fr-cms-api.herokuapp.com/';
export const API_NEWS = API_BASE + 'api/news';
export const API_JOURNALISM = API_BASE + 'api/journalism';
export const API_COLLABORATORS = API_BASE + 'graphql?query={collaborators{name, role, avatar{cloudinaryUrl}, orderNumber, urlName, about, urls{website,facebook,instagram,twitter,soundcloud,bandcamp,bio,email,phone}, collabOn}}';
export const API_PRESS = API_BASE + 'graphql?query={press{author, title, excerpt, releaseDate, externalLink}}';
export const API_GIGS = API_BASE + 'graphql?query={gigs{title, location, venue, date, ticketsUrl}}';
