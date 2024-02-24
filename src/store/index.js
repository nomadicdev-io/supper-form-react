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
                    type: 'input',
                    inputType: 'text',
                    require: true,
                    errorMessage: 'Error Message',
                    validationPattern: '',
                    placeholderText: ''
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
                    type: 'input',
                    inputType: 'text',
                    require: true,
                    errorMessage: 'Error Message',
                    validationPattern: '',
                    placeholderText: ''
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
                    type: 'datepicker',
                    inputType: 'datepicker',
                    range: [1980, 2008],
                    require: true,
                    errorMessage: 'Error Message',
                    validationPattern: '',
                    placeholderText: ''
                },
            },
            {
                id: 'gender',
                key: 'gender',
                label: {
                    ar: 'جنس',
                    en: 'Gender'
                },
                value: {
                    ar: [
                        {name: 'ذكر', value: 'ذكر'},
                        {name: 'أنثى', value: 'أنثى'},
                    ],
                    en: [
                        {name: 'Male', value: 'male'},
                        {name: 'Female', value: 'female'},
                    ]
                },
                field: {
                    type: 'radio',
                    inputType: 'radio',
                    require: true,
                    errorMessage: 'Error Message',
                    validationPattern: '',
                    placeholderText: ''
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
                    type: 'input',
                    inputType: 'email',
                    require: true,
                    errorMessage: 'Error Message',
                    validationPattern: '',
                    placeholderText: ''
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
                    type: 'input',
                    inputType: 'number',
                    require: true,
                    errorMessage: 'Error Message',
                    validationPattern: '',
                    placeholderText: ''
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
                    type: 'select',
                    inputType: 'select',
                    options: [
                        {label: 'Select Option 1', value: 'Select Option 1'},
                        {label: 'Select Option 2', value: 'Select Option 2'}, 
                        {label: 'Select Option 3', value: 'Select Option 3'}, 
                        {label: 'Select Option 4', value: 'Select Option 4'}
                    ],
                    require: true,
                    errorMessage: 'Error Message',
                    validationPattern: '',
                    placeholderText: 'Choose country'
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
                    type: 'select',
                    inputType: 'select',
                    options: [
                        {label: 'Select Option 1', value: 'Select Option 1'},
                        {label: 'Select Option 2', value: 'Select Option 2'}, 
                        {label: 'Select Option 3', value: 'Select Option 3'}, 
                        {label: 'Select Option 4', value: 'Select Option 4'}
                    ],
                    require: true,
                    errorMessage: 'Error Message',
                    validationPattern: '',
                    placeholderText: 'Choose Emirates'
                },
            },
            {
                id: 'are_you_willing_to_relocate',
                key: 'are_you_willing_to_relocate',
                label: {
                    ar: 'إذا كنت تعيش حاليًا خارج دولة الإمارات العربية المتحدة، فهل أنت على استعداد للانتقال للمشاركة في البرنامج؟',
                    en: 'If you currently live outside of the UAE, are you willing to relocate to participate in the program?'
                },
                value: {
                    ar: [
                        {name: 'نعم', value: 'نعم'},
                        {name: 'لا', value: 'لا'},
                        {name: 'أنا أعيش في الإمارات العربية المتحدة', value: 'أنا أعيش في الإمارات العربية المتحدة'}
                    ],
                    en: [
                        {name: 'Yes', value: 'yes'},
                        {name: 'No', value: 'no'},
                        {name: 'I live in UAE', value: 'i_live_in_uae'}
                    ]
                },
                field: {
                    type: 'radio',
                    inputType: 'radio',
                    require: true,
                    errorMessage: 'Error Message',
                    validationPattern: '',
                    placeholderText: ''
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
                    type: 'input',
                    inputType: 'number',
                    require: true,
                    errorMessage: 'Error Message',
                    validationPattern: '',
                    placeholderText: ''
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
                    type: 'select',
                    inputType: 'select',
                    options: [
                        {label: 'Select Option 1', value: 'Select Option 1'},
                        {label: 'Select Option 2', value: 'Select Option 2'}, 
                        {label: 'Select Option 3', value: 'Select Option 3'}, 
                        {label: 'Select Option 4', value: 'Select Option 4'}
                    ],
                    require: true,
                    errorMessage: 'Error Message',
                    validationPattern: '',
                    placeholderText: ''
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
                    type: 'upload',
                    inputType: 'upload',
                    require: true,
                    errorMessage: 'Error Message',
                    validationPattern: '',
                    placeholderText: ''
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
                    type: 'upload',
                    inputType: 'upload',
                    require: true,
                    errorMessage: 'Error Message',
                    validationPattern: '',
                    placeholderText: ''
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
                    type: 'input',
                    inputType: 'number',
                    require: true,
                    errorMessage: 'Error Message',
                    validationPattern: '',
                    placeholderText: ''
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
                    type: 'input',
                    inputType: 'text',
                    require: true,
                    errorMessage: 'Error Message',
                    validationPattern: '',
                    placeholderText: ''
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
                    type: 'input',
                    inputType: 'text',
                    require: true,
                    errorMessage: 'Error Message',
                    validationPattern: '',
                    placeholderText: ''
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
                    type: 'select',
                    inputType: 'select',
                    options: [
                        {label: 'Select Option 1', value: 'Select Option 1'},
                        {label: 'Select Option 2', value: 'Select Option 2'}, 
                        {label: 'Select Option 3', value: 'Select Option 3'}, 
                        {label: 'Select Option 4', value: 'Select Option 4'}
                    ],
                    require: true,
                    errorMessage: 'Error Message',
                    validationPattern: '',
                    placeholderText: ''
                },
            },
        ]
    },
    {
        key: 'professional_experience',
        title: {
            ar: 'الخبرة العملية',
            en: 'Professional Experience',
        },
        formFields: [
            {

                id: 'first_name',
                key: 'first_name',
                label: {
                    ar: 'الاسم الأول',
                    en: 'First name'
                },
                field: {
                    type: 'input',
                    inputType: 'text',
                    require: true,
                    errorMessage: 'Error Message',
                    validationPattern: '',
                    placeholderText: ''
                },
            },
            {

                id: 'first_name',
                key: 'first_name',
                label: {
                    ar: 'الاسم الأول',
                    en: 'First name'
                },
                field: {
                    type: 'input',
                    inputType: 'text',
                    require: true,
                    errorMessage: 'Error Message',
                    validationPattern: '',
                    placeholderText: ''
                },
            }
        ]
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