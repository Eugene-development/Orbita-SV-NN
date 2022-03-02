const mainAction = [
    {
        id: 1,
        stars: 3,
        startDate: '1 марта',
        finishDate: '',
        action: 'Техноблок по суперцене. Распродажа месяца.',
        descriptionAction: 'ТЕХНОБЛОК – это негорючие, гидрофобизированные тепло-, звукоизоляционные плиты из минеральной ваты на основе горных пород базальтовой группы.',
        oldPrice: 1,
        newPrice : 1235,
        unit: 'шт',
        characteristics: [
            {
                id: 1,
                descriptionCharacteristic: 'фыфыфыфыфыфы'
            },
        ],
        img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/a12adc654dac54907a50bc61812e8093.jpg'
    }
]
const actions = [
    // {
    //     action: 'Плита ОСБ Кроношпан 9мм 1250*2500мм',
    //     price: '750 рублей',
    //     description: 'Только до 10 ноября! Специальное предложение при наличном расчете! Cкидки и акции не суммируются.'
    // },
]

export const useActions = {
    mainAction,
    actions
}
