const Radio = {
    station: [
        {
            name: 'Hot 97',
            song: [
                {
                    artist: 'Adele',
                    title: 'Hello'
                },
                {
                    artist: 'The Roots',
                    title: 'The Seed 2.0'
                }
            ]
        },
        {
            name: 'Z-100',
            song: [
                {
                    artist: 'Kanye West',
                    title: 'The Life of Pablo'
                },
                {
                    artist: 'The Beatles',
                    title: 'Hey Jude'
                }
            ]
        },
        {
            name: 'FlyLo Radio',
            song: [
                {
                    artist: 'ThunderCat',
                    title: 'Dragonball Durag'
                },
                {
                    artist: 'Tyler the Creator',
                    title: 'WUSYANAME'
                }
            ]
        }                
    ],
    shuffle() {
       let i =  Math.floor(Math.random() * 3)
       let s =  Math.floor(Math.random() * 2)
      //  console.log(Radio.station[i].song[s])
       console.log(`Now playing ${Radio.station[i].song[s].title} by ${Radio.station[i].song[s].artist} on ${Radio.station[i].name}.`)
    }
        
 }

 console.log(Radio.shuffle())