// just completed this code without much understanding  ...this code can be much cleaner and wise 
// Url for api:
// https://v6.exchangerate-api.com/v6/cdeadac6ee65c1ba946bf363/latest/USD
// Your API Key: cdeadac6ee65c1ba946bf363
const body = document.querySelector('body')
const showOutput = document.querySelector('.showOutput')
const inpArea =document.querySelector('#inpArea')
const exchangeTo = document.querySelector('#exchangeTo')
const InpCunt = document.querySelector('#InpCunt')
const OutCunt = document.querySelector('#OutCunt')
const  inputCurrency = document.querySelector('.inputCurrency')
const exchangeCurrency = document.querySelector('.exchangeCurrency')

const countries = [
    { code: 'USD', value: 'United States of America' },
    { code: 'EUR', value: 'European Union' },
    { code: 'JPY', value: 'Japan' },
    { code: 'GBP', value: 'United Kingdom' },
    { code: 'AUD', value: 'Australia' },
    { code: 'CAD', value: 'Canada' },
    { code: 'CHF', value: 'Switzerland' },
    { code: 'CNY', value: 'China' },
    { code: 'SEK', value: 'Sweden' },
    { code: 'NZD', value: 'New Zealand' },
    { code: 'KRW', value: 'South Korea' },
    { code: 'SGD', value: 'Singapore' },
    { code: 'NOK', value: 'Norway' },
    { code: 'MXN', value: 'Mexico' },
    { code: 'INR', value: 'India' },
    { code: 'BRL', value: 'Brazil' },
    { code: 'RUB', value: 'Russia' },
    { code: 'ZAR', value: 'South Africa' },
    { code: 'TRY', value: 'Turkey' },
    { code: 'HKD', value: 'Hong Kong' },
    { code: 'IDR', value: 'Indonesia' },
    { code: 'ILS', value: 'Israel' },
    { code: 'PHP', value: 'Philippines' },
    { code: 'THB', value: 'Thailand' },
    { code: 'DKK', value: 'Denmark' },
    { code: 'PLN', value: 'Poland' },
    { code: 'CZK', value: 'Czech Republic' },
    { code: 'HUF', value: 'Hungary' },
    { code: 'MYR', value: 'Malaysia' },
    { code: 'ARS', value: 'Argentina' },
    { code: 'CLP', value: 'Chile' },
    { code: 'EGP', value: 'Egypt' },
    { code: 'UAH', value: 'Ukraine' },
    { code: 'AED', value: 'United Arab Emirates' },
    { code: 'QAR', value: 'Qatar' },
    { code: 'KWD', value: 'Kuwait' },
    { code: 'SAR', value: 'Saudi Arabia' },
    { code: 'BHD', value: 'Bahrain' },
    { code: 'OMR', value: 'Oman' },
    { code: 'JOD', value: 'Jordan' },
    { code: 'LBP', value: 'Lebanon' },
    { code: 'NGN', value: 'Nigeria' },
    { code: 'VEF', value: 'Venezuela' },
    { code: 'CRC', value: 'Costa Rica' },
    { code: 'COP', value: 'Colombia' },
    { code: 'PEN', value: 'Peru' },
    { code: 'UYU', value: 'Uruguay' },
    { code: 'DZD', value: 'Algeria' },
    { code: 'MAD', value: 'Morocco' },
    { code: 'ZMW', value: 'Zambia' },
    { code: 'TZS', value: 'Tanzania' },
    { code: 'UGX', value: 'Uganda' },
    { code: 'KES', value: 'Kenya' },
    { code: 'GHS', value: 'Ghana' },
    { code: 'ETB', value: 'Ethiopia' },
    { code: 'ZWL', value: 'Zimbabwe' },
    { code: 'SDG', value: 'Sudan' },
    { code: 'LKR', value: 'Sri Lanka' },
    { code: 'PKR', value: 'Pakistan' },
    { code: 'BDT', value: 'Bangladesh' },
    { code: 'VND', value: 'Vietnam' },
    { code: 'MNT', value: 'Mongolia' },
    { code: 'KHR', value: 'Cambodia' },
    { code: 'MMK', value: 'Myanmar' },
    { code: 'NPR', value: 'Nepal' },
    { code: 'LAK', value: 'Laos' },
    { code: 'KZT', value: 'Kazakhstan' },
    { code: 'UZS', value: 'Uzbekistan' },
    { code: 'TWD', value: 'Taiwan' },
    { code: 'BDT', value: 'Bangladesh' },
    { code: 'MOP', value: 'Macau' },
    { code: 'TMT', value: 'Turkmenistan' },
    { code: 'BYN', value: 'Belarus' },
    { code: 'AMD', value: 'Armenia' },
    { code: 'GEL', value: 'Georgia' },
    { code: 'AZN', value: 'Azerbaijan' },
    { code: 'MDL', value: 'Moldova' },
    { code: 'ALL', value: 'Albania' },
    { code: 'HRK', value: 'Croatia' },
    { code: 'BGN', value: 'Bulgaria' },
    { code: 'RON', value: 'Romania' },
    { code: 'CUP', value: 'Cuba' },
    { code: 'UYU', value: 'Uruguay' },
    { code: 'BZD', value: 'Belize' },
    { code: 'HTG', value: 'Haiti' },
    { code: 'GYD', value: 'Guyana' },
    { code: 'SVC', value: 'El Salvador' },
    { code: 'NIO', value: 'Nicaragua' },
    { code: 'BBD', value: 'Barbados' },
    { code: 'JMD', value: 'Jamaica' },
    { code: 'BSD', value: 'Bahamas' },
    { code: 'TTD', value: 'Trinidad and Tobago' },
    { code: 'XCD', value: 'Eastern Caribbean States' },
    { code: 'KYD', value: 'Cayman Islands' },
    { code: 'BMD', value: 'Bermuda' },
    { code: 'ANG', value: 'Netherlands Antilles' },
    { code: 'XPF', value: 'French Polynesia' },
    { code: 'FJD', value: 'Fiji' },
    { code: 'TOP', value: 'Tonga' },
    { code: 'WST', value: 'Samoa' },
    { code: 'PGK', value: 'Papua New Guinea' },
    { code: 'VUV', value: 'Vanuatu' },
    { code: 'KGS', value: 'Kyrgyzstan' },
    { code: 'TJS', value: 'Tajikistan' },
    { code: 'AFN', value: 'Afghanistan' },
];


//to iteirate through all the country's
countries.forEach(country => { //country here is for iteration it will act as "i" of for loop
    // we will create options from js otherwise we need to fill each country name manually in html

    // short version of code Form 26 to 32
    const option2 = document.createElement('option') //for exchangeTo
    const option1 = document.createElement('option') //for inpArea
    option1.value =  option2.value = country.code
    option1.textContent = option2.textContent =`${country.code} (${country.value})`

    // const option1 = document.createElement('option') //for inpArea
    // option1.value = country.code
    // option1.textContent = `${country.code} (${country.value})`

    // const option2 = document.createElement('option') //for exchangeTo
    // option2.value = country.code
    // option2.textContent = `${country.code} (${country.value})`

    InpCunt.appendChild(option1);
    OutCunt.appendChild(option2);

    InpCunt.value = 'INR'
    OutCunt.value = 'USD'

})

async function exchangePrice(){
    const amount = parseFloat(inpArea.value)
    const fromCurrency = InpCunt.value
    const toCurrency = OutCunt.value

    const response = await fetch(`https://v6.exchangerate-api.com/v6/cdeadac6ee65c1ba946bf363/latest/${fromCurrency}`)
    const data = await response.json()  

    const conversionRate = data.conversion_rates[toCurrency]
    const convertedAmnt = (amount * conversionRate)

    exchangeTo.value = convertedAmnt
    showOutput.textContent = `${amount} ${fromCurrency} = ${convertedAmnt} ${toCurrency}`
}
exchangePrice()

inpArea.addEventListener('input',exchangePrice)
InpCunt.addEventListener('change',exchangePrice)
OutCunt.addEventListener('input',exchangePrice)
window.addEventListener('load',exchangePrice)





