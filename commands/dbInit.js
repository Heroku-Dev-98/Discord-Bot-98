const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	storage: 'database.sqlite',
	operatorsAliases: false,
});

const CurrencyShop = sequelize.import('CurrencyShop');
sequelize.import('Users');
sequelize.import('UserItems');

const force = process.argv.includes('--force') || process.argv.includes('-f');

sequelize.sync({ force }).then(async () => {
	const shop = [
		CurrencyShop.upsert({ name: '1 Cloud Coin', cost: 2 }),
		CurrencyShop.upsert({ name: '10 Cloud Coins', cost: 20 }),
		CurrencyShop.upsert({ name: '50 Cloud Coins', cost: 100 }),
		CurrencyShop.upsert({ name: '100 Cloud Coins', cost: 200 }),
		CurrencyShop.upsert({ name: '1000 Cloud Coins', cost: 2000 }),
		CurrencyShop.upsert({ name: '10000 Cloud Coins', cost: 20000 }),
		CurrencyShop.upsert({ name: 'Infinity Cloud Coins', cost: 1000000 }),
	];
	await Promise.all(shop);
	console.log('Database synced');
	sequelize.close();
}).catch(console.error);