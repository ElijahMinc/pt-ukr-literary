import { AboutWidget } from '@/widgets/about/about.ui';
import { ContactsWidget } from '@/widgets/contacts/contacts.ui';
import { FooterWidget } from '@/widgets/footer/footer.ui';
import { HomeWidget } from '@/widgets/home/home.ui';
import client from '../../contentful';
import { EntrySkeletonType } from 'contentful';
import { IHomeFields } from '@/types/contentful';

const MainPage = async () => {
  const homeSectionData = await client.getEntries<EntrySkeletonType<IHomeFields>>({
    content_type: 'home',
    limit: 1,
  });

  const [homeSection] = homeSectionData.items;

  const homeData = homeSection?.fields;

  return (
    <main>
      <HomeWidget homeData={homeData} />
      <AboutWidget />
      <ContactsWidget />
      <FooterWidget />
    </main>
  );
};

export default MainPage;
