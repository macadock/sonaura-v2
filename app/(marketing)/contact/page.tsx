import { ContactForm } from '@/app/(marketing)/contact/components/form/ContactForm';
type ShopItem = {
  id: string;
  city: string;
  address: string;
  postalCode: string;
  country: string;
  phoneNumber: string;
  email: string;
  googleMapsUrl: string;
};

const items: ShopItem[] = [
  {
    id: 'de29fb14-f88c-4765-98f7-a6b2077e9aab',
    city: 'Grenoble',
    country: 'France',
    address: '13 Rue Montorge',
    postalCode: '38000',
    phoneNumber: '+33 4 76 47 49 93',
    googleMapsUrl:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11247.16837463373!2d5.7255587!3d45.1913047!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6bcc7cd1d90fb7be!2sBang%20%26%20Olufsen!5e0!3m2!1sfr!2sfr!4v1642659344100!5m2!1sfr!2sfr',
    email: 'contactgrenoble@sonaura.fr',
  },
  {
    id: '56a3eca3-9eb7-4e53-870f-ea49cb16e77c',
    city: 'Lyon',
    country: 'France',
    address: '14 Rue des Archers',
    postalCode: '69002',
    phoneNumber: '+33 4 72 41 74 03',
    googleMapsUrl:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11134.388004502805!2d4.8343559!3d45.7592246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3ef7190ae59f2f40!2sBang%20%26%20Olufsen!5e0!3m2!1sfr!2sfr!4v1642659406643!5m2!1sfr!2sfr',
    email: 'contactlyon@sonaura.fr',
  },
];

const Contact = () => {
  return (
    <div className="flex flex-col xl:max-w-7xl xl:m-auto">
      <div className="flex flex-col gap-6 justify-center items-center bg-background px-4 py-10 text-center">
        <h1 className="text-3xl md:text-6xl font-medium">Contactez-nous</h1>
        <p className="text-lg md:text-xl">
          Nos experts Bang & Olufsen répondent à vos questions et vous aident à
          gagner du temps.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 p-4 lg:p-8">
        {items.map(
          ({
            id,
            city,
            address,
            postalCode,
            email,
            phoneNumber,
            googleMapsUrl,
          }) => (
            <div key={id} className="flex flex-col gap-4 p-4">
              <p className="text-2xl font-medium">{city}</p>
              <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
                <div className="flex flex-col">
                  <p className="text-base font-medium">Téléphone</p>
                  <a
                    href={`tel:${phoneNumber.replaceAll(' ', '')}`}
                    className="text-base"
                  >
                    {phoneNumber}
                  </a>
                </div>
                <div className="flex flex-col">
                  <p className="text-base font-medium">E-mail</p>
                  <a href={`mailto:${email}`} className="text-base">
                    {email}
                  </a>
                </div>
                <div className="flex flex-col">
                  <p className="text-base font-medium">Adresse</p>
                  <p className="text-base">{`${address}, ${postalCode} ${city}`}</p>
                </div>
              </div>
              <iframe
                style={{
                  minHeight: '25rem',
                }}
                src={googleMapsUrl}
                loading={'lazy'}
              />
            </div>
          ),
        )}
      </div>

      <div className="flex flex-col gap-4 p-4 bg-background md:text-center lg:gap-12 lg:p-12">
        <h2 className="text-2xl font-medium lg:text-3xl">
          Vous ne trouvez pas de réponse à vos questions ?
        </h2>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
