const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	storage: 'currencyDatabase.sqlite',
	operatorsAliases: false,
});

const CurrencyShop = sequelize.import('CurrencyShop');
sequelize.import('Users');
sequelize.import('UserItems');

const force = process.argv.includes('--force') || process.argv.includes('-f');

sequelize.sync({ force }).then(() => {
	const shop = [
		CurrencyShop.upsert({ name: '1 Cloud Coin', cost: 2 }),
		CurrencyShop.upsert({ name: '10 Cloud Coins', cost: 5 }),
		CurrencyShop.upsert({ name: '100 Cloud Coins', cost: 25 }),
		CurrencyShop.upsert({ name: '150 Cloud Coins', cost: 30 }),
		CurrencyShop.upsert({ name: '1000 Cloud Coins', cost: 500 }),
		CurrencyShop.upsert({ name: '10000 Cloud Coins', cost: 600 }),
		CurrencyShop.upsert({ name: '1000000 Cloud Coins', cost: 1000 }),

	];
	Promise.all(shop);
	console.log('Database synced');
	sequelize.close();
}).catch(console.error);