import { AboutWidget } from '@/widgets/about/about.ui';
import { ArtistsWidget } from '@/widgets/artists/artists.ui';
import { ContactsWidget } from '@/widgets/contacts/contacts.ui';
import { FooterWidget } from '@/widgets/footer/footer.ui';
import { HomeWidget } from '@/widgets/home/home.ui';

export const revalidate = 5;

const MainPage = () => {
  return (
    <main>
      <HomeWidget />
      <AboutWidget />
      <ContactsWidget />
      <ArtistsWidget />
      <FooterWidget />
    </main>
  );
};

export default MainPage;
