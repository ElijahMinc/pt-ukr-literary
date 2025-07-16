import { AboutWidget } from '@/widgets/about/about.ui';
import { ArtistsWidget } from '@/widgets/artists/artists.ui';
import { ContactsWidget } from '@/widgets/contacts/contacts.ui';
import { FooterWidget } from '@/widgets/footer/footer.ui';
import { GalleryWidget } from '@/widgets/gallery/gallery.ui';
import { HomeWidget } from '@/widgets/home/home.ui';
import { JoinUsWidget } from '@/widgets/join-us/join-us.ui';

export const revalidate = 5;

const MainPage = () => {
  return (
    <main>
      <HomeWidget />
      <AboutWidget />
      <ArtistsWidget />
      <GalleryWidget />
      <ContactsWidget />
      <JoinUsWidget />
      <FooterWidget />
    </main>
  );
};

export default MainPage;
