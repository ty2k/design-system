import {
  Footer,
  Header,
  Heading,
  Link,
  SvgChevronLeftIcon,
  TagGroup,
  TagList,
  Text,
} from "@bcgov/design-system-react-components";
import "./App.css";

const licence = {
  name: "Murderface",
  status: "Active",
  licenceNumber: "BCL-2026-08471",
  registeredDate: "August 10, 2026",
  expiryDate: "August 10, 2027",
};

const catDetails = [
  { label: "Breed", value: "Domestic Shorthair" },
  { label: "Primary colour", value: "Black" },
  { label: "Sex", value: "Male" },
  { label: "Year of birth", value: "2021" },
  { label: "Spayed / Neutered", value: "Yes" },
  { label: "Microchip ID", value: "956000012345678" },
];

const ownerDetails = [
  { label: "Owner", value: "Dana Small" },
  { label: "Email", value: "d.small@email.com" },
  { label: "Phone", value: "250-555-0198" },
  { label: "Address", value: "456 Burrard St, Victoria, BC V8W 2A9" },
];

function DetailList({
  title,
  items,
}: {
  title: string;
  items: { label: string; value: string }[];
}) {
  return (
    <section className="detail-card">
      <Heading level={2}>{title}</Heading>
      <dl className="detail-card--list">
        {items.map(({ label, value }) => (
          <div className="detail-card--row" key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function App() {
  return (
    <>
      <Header title="Cat Licence Registry" titleElement="h1">
        <Link href="#" iconLeft={<SvgChevronLeftIcon />}>
          Register a cat
        </Link>
      </Header>
      <main className="cat-licence-page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="#" isUnstyled size="small">
            Cat Licence Registry
          </Link>
          <span aria-hidden="true"> &rsaquo; </span>
          <span aria-current="page">Licence #{licence.licenceNumber}</span>
        </nav>

        <section className="licence-summary">
          <div className="licence-summary--bar" />
          <div className="licence-summary--content">
            <div className="licence-summary--avatar" aria-hidden="true">
              🐱
            </div>
            <div className="licence-summary--details">
              <div className="licence-summary--heading-row">
                <Heading level={2}>{licence.name}</Heading>
                <div className="licence-summary--status">
                  <Text size="small" color="secondary">
                    Status
                  </Text>
                  <TagGroup aria-label="Licence status">
                    <TagList
                      items={[
                        {
                          id: "status",
                          textValue: licence.status,
                          color: "green",
                        },
                      ]}
                    />
                  </TagGroup>
                </div>
              </div>
              <Text elementType="p">
                Licence No. <strong>{licence.licenceNumber}</strong> ·
                Registered {licence.registeredDate} · Expires{" "}
                {licence.expiryDate}
              </Text>
            </div>
          </div>
        </section>

        <div className="detail-grid">
          <DetailList title="Cat Details" items={catDetails} />
          <DetailList title="Registered Owner" items={ownerDetails} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
