export default class MoneyUtils {
    static numFormatFixToLocale (amount: number, lang: string, currency = 'EUR', precision = 2) {
        const options = {
            style: 'currency',
            currency,
            minimunFractionDigits: precision,
            maximumFractionDigits: precision
        };

        const formatter = new Intl.NumberFormat(lang, options);

        let value = formatter.format(amount);

        const decimal = formatter.formatToParts(amount).find((item) => item.type === 'decimal');

        if (decimal?.value === ',') {
            value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        }

        return value;
    }
}
