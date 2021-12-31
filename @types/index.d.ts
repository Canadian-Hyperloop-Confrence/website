interface INavLink {
  readonly label:  string;
  readonly to:  string;
}

interface TeamMemberHeadshot {
  name: string;
  position: string;
  img: string;
}

// A simple date interface used for displaying dates
interface SimpleDate {
  day: number;
  month: number;
  year: number;
}

interface BlogCardData {
  title: string;
  imageSrc: string;
  datePosted: SimpleDate;
  link: string;
  type: 'medium' | 'video' | 'news'
}

interface PartnerSponsorImageCard {
  imageSrc: string;
  altText: string;
  link: string;
}

interface Team {
  name: string;
  instituiton?: string;
  logo: string;
}

interface VirtualShowcaseTeamPreview {
  team: Team
  category: string;
  title: string;
  presentationLink: string;
  summary?: string;
}
