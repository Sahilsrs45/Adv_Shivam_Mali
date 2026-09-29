import { BriefcaseBusiness, Building2, FileText, Landmark, Scale, Users } from 'lucide-react';

export const practiceAreas = [
  'Criminal Defence',
  'Consumer Protection',
  'Family Law',
  'Business Protection',
  'Labor & Industrial Tribunals',
  'Civil Litigations',
  'Property Matters',
  'Corporate Advisory',
  'Other Matters'
];

export const practiceCards = [
  {
    title: 'Criminal Defence',
    icon: Scale,
    featured: true,
    text: 'Police Station Assistance, remand proceedings, anticipatory and regular bail, criminal trials, appeals, revisions, and comprehensive legal representation at every stage of criminal proceedings.',
    points: ['Bail & anticipatory bail', 'Criminal trial strategy', 'Appeals & revisions', 'Investigative support'],
    action: 'View Defence Strategy'
  },
  {
    title: 'Consumer Protection',
    icon: FileText,
    highlighted: true,
    text: 'Representation before Consumer Commissions for defective products, deficient services, medical negligence, insurance claims, e-commerce disputes, unfair trade practices, compensation claims, and consumer appeals.',
    action: 'Advocacy'
  },
  {
    title: 'Family Law',
    icon: Users,
    text: 'Pre-litigation dispute resolution, mediation, restitution of conjugal rights, mutual and contested divorce, maintenance, child custody, domestic violence matters, and representation before Family Courts and High Courts.',
    action: 'Legal Guidance'
  },
  {
    title: 'Business Protection',
    icon: BriefcaseBusiness,
    text: 'Strategic protection for business interests through contract drafting, intellectual property support, regulatory compliance, commercial dispute resolution, and legal risk management.',
    action: 'Protect Your Business'
  },
  {
    title: 'Labor & Industrial Tribunals',
    icon: Landmark,
    text: 'Representation before Labour Courts, Industrial Tribunals, and related authorities in industrial disputes, service matters, standing orders, collective bargaining, and employment claims.',
    action: 'Tribunal Representation'
  },
  {
    title: 'Civil Litigations',
    icon: Landmark,
    text: 'Legal representation in civil disputes involving recovery suits, injunctions, contractual disputes, declaration suits, partition matters, specific performance, appeals, and execution proceedings before Civil Courts and High Courts.',
    action: 'Consultation'
  },
  {
    title: 'Property Matters',
    icon: Building2,
    text: 'Property title verification, due diligence, sale and purchase agreements, registration, partition disputes, succession matters, land acquisition, real estate documentation, and property litigation.',
    action: 'Details'
  },
  {
    title: 'Corporate Advisory',
    icon: BriefcaseBusiness,
    text: 'Business formation, contract drafting and review, legal compliance, employment law, commercial transactions, regulatory advisory, corporate governance, dispute resolution, and legal risk management.',
    action: 'Compliance'
  }
];
