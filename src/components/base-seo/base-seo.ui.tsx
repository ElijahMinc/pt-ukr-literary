export interface IBaseSeoProps {
  title: string;
  description: string;
  locale: 'en';
  isIndexablePage: boolean;
}

export const BaseSeo = ({
  title,
  description,
  locale = 'en',
  isIndexablePage = true,
}: IBaseSeoProps) => {
  return (
    <>
      {!isIndexablePage && <meta name='robots' content='noindex' />}
      <title>{title}</title>
      <meta httpEquiv='content-language' content={locale} />
      <meta name='description' content={description} />
    </>
  );
};
