import { AboutWidget } from '@/widgets/about/about.ui';
import { ContactsWidget } from '@/widgets/contacts/contacts.ui';
import { FooterWidget } from '@/widgets/footer/footer.ui';
import { HomeWidget } from '@/widgets/home/home.ui';

const MainPage = () => {
  return (
    <main>
      <HomeWidget />
      <AboutWidget />
      <ContactsWidget />
      <FooterWidget />
    </main>
  );
};

export default MainPage;
