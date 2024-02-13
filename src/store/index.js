export const formData = [{
        key: 'personal_information',
        title: {
            ar: 'معلومات شخصية',
            en: 'Personal Information',
        },
        formFields: [{
                id: 'first_name',
                key: 'first_name',
                label: {
                    ar: 'الاسم الأول',
                    en: 'First name'
                },
                field: {
                    type: '',
                    inputType: '',
                    require: true,
                    errorMessage: '',
                },
            },
            {
                id: 'last_name',
                key: 'last_name',
                label: {
                    ar: 'اسم العائلة',
                    en: 'Last name'
                },
                field: {
                    type: '',
                    inputType: '',
                    require: true,
                    errorMessage: '',
                },
            },
            {
                id: 'date_of_birth',
                key: 'date_of_birth',
                label: {
                    ar: 'تاريخ الميلاد',
                    en: 'Date of birth'
                },
                field: {
                    type: '',
                    inputType: '',
                    require: true,
                    errorMessage: '',
                },
            },
            {
                id: 'gender',
                key: 'gender',
                label: {
                    ar: 'جنس',
                    en: 'Gender'
                },
                value: [{
                        ar: 'ذكر',
                        en: 'Male',
                    },
                    {
                        ar: 'أنثى',
                        en: 'Female',
                    }
                ],
                field: {
                    type: '',
                    inputType: '',
                    require: true,
                    errorMessage: '',
                },
            },
            {
                id: 'email_address',
                key: 'email_address',
                label: {
                    ar: 'بريد إلكتروني',
                    en: 'Email address'
                },
                field: {
                    type: '',
                    inputType: '',
                    require: true,
                    errorMessage: '',
                },
            },
            {
                id: 'telephone_number',
                key: 'telephone_number',
                label: {
                    ar: 'رقم هاتف',
                    en: 'Telephone number'
                },
                field: {
                    type: '',
                    inputType: '',
                    require: true,
                    errorMessage: '',
                },
            },
            {
                id: 'country_of_residence',
                key: 'country_of_residence',
                label: {
                    ar: 'بلد الإقامة',
                    en: 'Country of residence'
                },
                field: {
                    type: '',
                    inputType: '',
                    require: true,
                    errorMessage: '',
                },
            },
            {
                id: 'emirate_of_residence',
                key: 'emirate_of_residence',
                label: {
                    ar: 'إمارة الإقامة',
                    en: 'Emirate of residence'
                },
                field: {
                    type: '',
                    inputType: '',
                    require: true,
                    errorMessage: '',
                },
            },
            {
                id: 'are_you_willing_to_relocate',
                key: 'are_you_willing_to_relocate',
                label: {
                    ar: 'إذا كنت تعيش حاليًا خارج دولة الإمارات العربية المتحدة، فهل أنت على استعداد للانتقال للمشاركة في البرنامج؟',
                    en: 'If you currently live outside of the UAE, are you willing to relocate to participate in the program?'
                },
                field: {
                    type: '',
                    inputType: '',
                    require: true,
                    errorMessage: '',
                },
            },
            {
                id: 'years_of_work_experience',
                key: 'years_of_work_experience',
                label: {
                    ar: 'سنوات من الخبرة في العمل',
                    en: 'Years of work experience'
                },
                field: {
                    type: '',
                    inputType: '',
                    require: true,
                    errorMessage: '',
                },
            },
            {
                id: 'current_employment_status',
                key: 'current_employment_status',
                label: {
                    ar: 'حالة التوظيف الحالية',
                    en: 'Current employment status'
                },
                field: {
                    type: '',
                    inputType: '',
                    require: true,
                    errorMessage: '',
                },
            },
            {
                id: 'profile_photo',
                key: 'profile_photo',
                label: {
                    ar: 'يرجى تحميل صورة حديثة لنفسك',
                    en: 'Please upload a recent photo of yourself'
                },
                field: {
                    type: '',
                    inputType: '',
                    require: true,
                    errorMessage: '',
                },
            },
            {
                id: 'resume',
                key: 'resume',
                label: {
                    ar: 'يرجى تحميل سيرتك الذاتية',
                    en: 'Please upload your CV'
                },
                field: {
                    type: '',
                    inputType: '',
                    require: true,
                    errorMessage: '',
                },
            },
            {
                id: 'degree_earned_and_year',
                key: 'degree_earned_and_year',
                label: {
                    ar: 'الدرجة العلمية التي حصل عليها والسنة',
                    en: 'Degree earned and year '
                },
                field: {
                    type: '',
                    inputType: '',
                    require: true,
                    errorMessage: '',
                },
            },
            {
                id: 'field_of_study',
                key: 'field_of_study',
                label: {
                    ar: 'مجال الدراسة',
                    en: 'Field of study'
                },
                field: {
                    type: '',
                    inputType: '',
                    require: true,
                    errorMessage: '',
                },
            },
            {
                id: 'issuing_school_or_university',
                key: 'issuing_school_or_university',
                label: {
                    ar: 'إصدار المدرسة/الجامعة',
                    en: 'Issuing school/university'
                },
                field: {
                    type: '',
                    inputType: '',
                    require: true,
                    errorMessage: '',
                },
            },
            {
                id: 'country_of_school_university',
                key: 'country_of_school_university',
                label: {
                    ar: 'بلد المدرسة/الجامعة',
                    en: 'Country of school/ university'
                },
                field: {
                    type: '',
                    inputType: '',
                    require: true,
                    errorMessage: '',
                },
            },
        ]
    },
    {
        key: 'professional_experience',
        title: {
            ar: 'الخبرة العملية',
            en: 'Professional Experience',
        }
    },
    {
        key: 'motivation',
        title: {
            ar: 'تحفيز',
            en: 'Motivation',
        }
    },
    {
        key: 'all_interview',
        title: {
            ar: 'كل المقابلة',
            en: 'All Interview',
        }
    }
]