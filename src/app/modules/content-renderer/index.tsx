import clientConfig from "../../../../client-config";
import HeroBanner from "../hero-banner";

type Props = {
  data: any;
  type: "ComponentTampilanBanner" | "";
};

const ContentRenderer: React.FC<Props> = ({ type, data }) => {
  if (type === "ComponentTampilanBanner") {
    return (
      <ComponentTampilanBanner
        background={{
          alt: data.latar_belakang.data.attributes.alternativeText,
          url: `${clientConfig.strapiUrl}${data.latar_belakang.data.attributes.url}`,
        }}
        button={{ text: data.link_teks, url: data.link_url }}
        description={data.deskripsi}
        title={data.judul}
      />
    );
  }
  return <></>;
};

type TampilanBannerProp = {
  title?: string;
  description?: string;
  button?: {
    text: string;
    url: string;
  };
  background?: {
    url: string;
    alt: string;
  };
};

const ComponentTampilanBanner: React.FC<TampilanBannerProp> = ({
  title,
  description,
  button,
  background,
}) => {
  return (
    <HeroBanner
      title={title}
      description={description}
      link={{
        text: button?.text ?? "",
        url: button?.url ?? "",
      }}
      background={{
        url: background?.url ?? "",
        alt: background?.alt ?? "",
      }}
    />
  );
};

export default ContentRenderer;
