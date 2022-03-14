const mainAction = [
    {
        id: 1,
        stars: 4,
        startDate: '15 марта',
        finishDate: '',
        action: 'Смесь для пола "юнис" горизонт универсальный (20 кг)',
        descriptionAction: 'Стяжка цементная "Юнис Горизонт Универсальный" - быстротвердеющий наливной пол для внутренних работ в теплых помещениях. Применяется с бетонными, цементными стяжками на несущих основаниях, имеющих неровности от 2 до 100 мм. Может использоваться в ванных комнатах и кухнях.',
        oldPrice: 1,
        newPrice : 350,
        unit: 'шт',
        characteristics: [
            {
                id: 1,
                descriptionCharacteristic: 'Мешки по 20 кг'
            },
            {
                id: 1,
                descriptionCharacteristic: 'Сыпучий материал'
            },
        ],
        img: 'https://lumen-image-bucket.s3.eu-central-1.amazonaws.com/images/%D1%8E%D1%83.jpg'
    }
]
const actions = [
    // {
    //     action: 'Плита ОСБ Кроношпан 9мм 1250*2500мм',
    //     price: '750 рублей',
    //     description: 'Только до 10 ноября! Специальное предложение при наличном расчете! Cкидки и акции не суммируются.'
    // },
]

const seasonalGoods = [
    {
     id: 1,

    },
]

export const useActions = {
    mainAction,
    actions
}
