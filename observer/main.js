const Jack = new User('Jack')
const Sara = new User('Sara')
const Max = new User('Max')

const autoNews = new AutoNews()

autoNews.register(Jack)
autoNews.register(Sara)
autoNews.register(Max)

autoNews.setNews('Tesla won prize')