import { AboutWidget } from '@/widgets/about/about.ui';
import { FooterWidget } from '@/widgets/footer/footer.ui';
import { HomeWidget } from '@/widgets/home/home.ui';

const MainPage = () => {
  return (
    <main>
      <HomeWidget />
      <AboutWidget />
      <FooterWidget />
    </main>
  );
};

export default MainPage;
