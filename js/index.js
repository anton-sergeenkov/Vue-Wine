
// {
//     title: 'Чили',
//     name: 'Chile',
//     items: [
//         {
//             img: '01.jpg',
//             name: 'Название вина',
//             type: 'Белое полусухое',
//             grapes: 'Сорт винограда',
//             about: ['', '']
//         },
//     ]
// },

new Vue({
    el: '#container',
    data: {
        wine: [
            {
                title: 'Чили',
                name: 'Chile',
                items: [
                    { img: '03.jpg', name: 'Poyen Chardonnay',         type: 'Белое полусухое', about: [] },
                    { img: '06.jpg', name: 'Poyen Chardonnay Reserva', type: 'Белое сухое',     about: [] },
                    { img: '04.jpg', name: '', about: [] },
                    { img: '02.jpg', name: '', about: [] },
                    { img: '05.jpg', name: '', about: [] },
                    { img: '01.jpg', name: '', about: [] },
                ]
            },
            {
                title: 'Грузия',
                name: 'Georgia',
                items: [
                    { img: '01.jpg', name: '', about: [] },
                    { img: '02.jpg', name: '', about: [] },
                    { img: '03.jpg', name: '', about: [] },
                    { img: '04.jpg', name: '', about: [] },
                    { img: '05.jpg', name: '', about: [] },
                    { img: '06.jpg', name: '', about: [] },
                    { img: '07.jpg', name: '', about: [] },
                ]
            },
            {
                title: 'Испания',
                name: 'Spain',
                items: [
                    { img: '01.jpg', name: '', about: [] },
                ]
            },
            {
                title: 'Италия',
                name: 'Italy',
                items: [
                    { img: '01.jpg', name: 'Fantinel Pinot Grigio Borgo Tesis', type: 'Белое сухое', grapes: 'Пино Гриджио', about: [] },
                ]
            },
            {
                title: 'Крым',
                name: 'Crimea',
                items: [
                    { img: '01.jpg', name: '', about: [] },
                    { img: '02.jpg', name: '', about: [] },
                    { img: '03.jpg', name: '', about: [] },
                ]
            },

            {
                title: 'Болгария',
                name: 'Bulgaria',
                items: [
                    { img: '01.jpg', name: '',  about: ['Красное полусладкое', 'Дешевое и неплохое'] },
                    { img: '02.jpg', name: '', about: ['Красное полусладкое', 'Дешевое и неплохое, не особо сладкое'] },
                ]
            },
            {
                title: 'Франция',
                name: 'France',
                items: [
                    { img: '01.jpg', name: '', about: [] },
                ]
            },
            {
                title: 'Россия',
                name: 'Russia',
                items: [
                    { img: '01.jpg', name: '', about: [] },
                ]
            },
            {
                title: 'Игристое',
                name: 'Sparkling',
                items: [
                    { img: '01.jpg', name: '', about: [] },
                    { img: '02.jpg', name: '', about: [] },
                ]
            },
            {
                title: 'Неизвестно',
                name: 'Unknown',
                items: [
                    { img: '01.jpg', name: '', about: [] },
                ]
            },
        ],
    }
});
