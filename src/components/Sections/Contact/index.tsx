import {DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {FC, memo} from 'react';

import {contact, SectionId} from '../../../data/data';
import {ContactType, ContactValue} from '../../../data/dataDef';
import FacebookIcon from '../../Icon/FacebookIcon';
import GithubIcon from '../../Icon/GithubIcon';
import InstagramIcon from '../../Icon/InstagramIcon';
import LinkedInIcon from '../../Icon/LinkedInIcon';
import TwitterIcon from '../../Icon/TwitterIcon';
import Section from '../../Layout/Section';

const ContactValueMap: Record<ContactType, ContactValue> = {
  [ContactType.Email]: {Icon: EnvelopeIcon, srLabel: 'Email'},
  [ContactType.Phone]: {Icon: DevicePhoneMobileIcon, srLabel: 'Phone'},
  [ContactType.Location]: {Icon: MapPinIcon, srLabel: 'Location'},
  [ContactType.Github]: {Icon: GithubIcon, srLabel: 'Github'},
  [ContactType.LinkedIn]: {Icon: LinkedInIcon, srLabel: 'LinkedIn'},
  [ContactType.Facebook]: {Icon: FacebookIcon, srLabel: 'Facebook'},
  [ContactType.Twitter]: {Icon: TwitterIcon, srLabel: 'Twitter'},
  [ContactType.Instagram]: {Icon: InstagramIcon, srLabel: 'Instagram'},
};

const Contact: FC = memo(() => {
  const {headerText, description, items} = contact;
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Contact}>
      <div className="flex flex-col items-center gap-y-8">
        <div className="flex flex-col items-center gap-4">
          <EnvelopeIcon className="h-16 w-16 text-white" />
          <h2 className="text-3xl font-bold text-white">{headerText}</h2>
          <p className="prose text-center leading-6 text-neutral-300 max-w-2xl">{description}</p>
        </div>
        <div className="flex flex-col gap-y-6">
          <dl className="flex flex-col space-y-6 text-lg text-neutral-500">
            {items.map(({type, text, href}) => {
              const {Icon, srLabel} = ContactValueMap[type];
              return (
                <div className="flex justify-center" key={srLabel}>
                  <dt className="sr-only">{srLabel}</dt>
                  <dd className="flex items-center">
                    <a
                      className={classNames(
                        'flex items-center rounded-md p-3 text-neutral-300 hover:text-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500',
                        {'hover:text-white': href},
                      )}
                      href={href}
                      target="_blank">
                      <Icon aria-hidden="true" className="h-6 w-6 flex-shrink-0 text-neutral-100" />
                      <span className="ml-4 text-base sm:text-lg">{text}</span>
                    </a>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </Section>
  );
});

Contact.displayName = 'About';
export default Contact;
