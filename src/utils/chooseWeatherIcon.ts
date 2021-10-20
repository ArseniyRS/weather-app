export const chooseWeatherIcon = (typeImg: string) => {
    switch (typeImg) {
        case '01d':
            return 'sun'
        case '01n':
            return 'moon'
        case '02d':
            return 'cloud-sun'
        case '02n':
            return 'cloud-moon'
        case '03d':
            return 'cloud'
        case '04d':
            return 'cloud'
        case '09d':
            return 'cloud-rain'
        case '10d':
            return 'cloud-sun-rain'
        case '10n':
            return 'cloud-moon-rain'
        case '11d':
            return 'cloud-showers-heavy'
        case '13d':
            return 'snowflake'
        default:
            return 'sun'
    }
}