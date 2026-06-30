export const services = [
  {
    id: 1,
    slug: 'psychiatric-treatment',
    title: 'Psychiatric Treatment',
    category: 'Psychiatry',
    shortDesc: 'Comprehensive psychiatric evaluations and evidence-based treatment for a wide range of mental health conditions.',
    description:
      'Our board-certified psychiatrists provide thorough mental health evaluations and develop personalized treatment plans. We use evidence-based approaches including pharmacotherapy and psychotherapy to treat conditions such as depression, bipolar disorder, schizophrenia, and more.',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&auto=format&fit=crop&q=80',
    icon: '🧠',
    features: [
      'Comprehensive psychiatric evaluations',
      'Personalized treatment planning',
      'Medication management & monitoring',
      'Dual-diagnosis treatment',
      'Telepsychiatry available',
      'Follow-up care & support',
    ],
    benefits: [
      'Accurate diagnosis from certified specialists',
      'Evidence-based treatment protocols',
      'Holistic approach addressing mind and body',
      'Confidential, judgment-free environment',
    ],
    process: [
      { step: 1, title: 'Initial Evaluation', desc: 'A 90-minute comprehensive psychiatric assessment.' },
      { step: 2, title: 'Diagnosis & Planning', desc: 'We review findings and create your personalized care plan.' },
      { step: 3, title: 'Treatment Begins', desc: 'Begin therapy, medication, or a combined approach.' },
      { step: 4, title: 'Ongoing Monitoring', desc: 'Regular follow-ups to adjust treatment as needed.' },
    ],
    price: 'From $150/session',
    duration: '60–90 min',
    assignedDoctor: 'dr-esther-howard',
    relatedServices: ['medication-management', 'counseling-therapy'],
  },
  {
    id: 2,
    slug: 'medication-management',
    title: 'Medication Management',
    category: 'Psychiatry',
    shortDesc: 'Expert oversight of psychiatric medications to ensure safe, effective, and personalized pharmacological care.',
    description:
      'Our psychiatrists carefully monitor all prescribed medications, adjust dosages as needed, and work closely with you to minimize side effects while maximizing therapeutic benefits. We educate patients and families about each medication and coordinate with other providers.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop&q=80',
    icon: '💊',
    features: [
      'Medication review & optimization',
      'Side-effect monitoring',
      'Drug interaction screening',
      'Lab monitoring coordination',
      'Patient & family education',
      'Coordination with primary care',
    ],
    benefits: [
      'Safer, more effective medication use',
      'Reduced side effects through careful titration',
      'Improved treatment adherence',
      'Seamless communication across your care team',
    ],
    process: [
      { step: 1, title: 'Medication Review', desc: 'Full review of all current medications and history.' },
      { step: 2, title: 'Risk Assessment', desc: 'Evaluate interactions, contraindications, and goals.' },
      { step: 3, title: 'Prescription & Education', desc: 'Prescribe or adjust medications with full guidance.' },
      { step: 4, title: 'Follow-Up', desc: 'Schedule check-ins to assess effectiveness and tolerability.' },
    ],
    price: 'From $100/session',
    duration: '30–45 min',
    assignedDoctor: 'dr-jenny-wilson',
    relatedServices: ['psychiatric-treatment', 'counseling-therapy'],
  },
  {
    id: 3,
    slug: 'counseling-therapy',
    title: 'Counseling & Therapy',
    category: 'Therapy',
    shortDesc: 'Individual and group counseling to help you navigate life challenges, build resilience, and achieve emotional well-being.',
    description:
      'Our licensed therapists use proven modalities—CBT, DBT, ACT, and psychodynamic therapy—to help you work through anxiety, depression, trauma, relationship issues, and life transitions. Sessions are collaborative, compassionate, and tailored to your unique needs.',
    image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&auto=format&fit=crop&q=80',
    icon: '🤝',
    features: [
      'Individual therapy sessions',
      'Group therapy options',
      'CBT, DBT, and ACT modalities',
      'Trauma-informed care',
      'Telehealth sessions available',
      'Sliding-scale fees',
    ],
    benefits: [
      'Develop healthy coping strategies',
      'Improve relationships and communication',
      'Build lasting emotional resilience',
      'Work through past and present challenges',
    ],
    process: [
      { step: 1, title: 'Intake Session', desc: 'Share your goals, history, and what brings you to therapy.' },
      { step: 2, title: 'Therapy Matching', desc: 'Get matched with the right therapist and modality.' },
      { step: 3, title: 'Regular Sessions', desc: 'Weekly or bi-weekly sessions at your pace.' },
      { step: 4, title: 'Progress Review', desc: 'Periodic check-ins to measure growth and update goals.' },
    ],
    price: 'From $120/session',
    duration: '50 min',
    assignedDoctor: 'dr-kristin-watson',
    relatedServices: ['psychiatric-treatment', 'medication-management'],
  },
];

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug);
export const getServicesByCategory = (category) =>
  category === 'All' ? services : services.filter((s) => s.category === category);
export const getRelatedServices = (slugs) => services.filter((s) => slugs.includes(s.slug));
