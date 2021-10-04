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
  date: SimpleDate;
  link: string;
}

interface PartnerSponsorImageCard {
  imageSrc: string;
  altText: string;
  link: string;
}
