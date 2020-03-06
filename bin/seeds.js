var faker = require('faker');
const mongoose = require("mongoose");
require("dotenv").config(); // import all key/value pairs from .env in process.env : really usefull when going online :)
require("./../config/mongo");

const ObjectId = mongoose.Types.ObjectId;

faker.locale = 'fr';

// const users = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
//   .map(() => faker.helpers.contextualCard())
//   .map(user => ({
//     name: user.name,
//     username: user.username,
//     lastName: '',
//     avatar: user.avatar,
//     email: user.email,
//     birthday: user.dob,
//     comments: [],
//     ads: [],
//     rates: [],
//     password: faker.fake("{{internet.password}}"),
//     status: '',
//     gender: ''
//   }))

const users = [{
    name: 'Mattéo',
    username: 'Mattéo.Guyot58',
    lastName: 'Guyot',
    avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ManikRathee/128.jpg',
    email: 'Matto.Guyot58.Royer8@hotmail.fr',
    birthday: '1985-09-17',
    comments: [],
    ads: [],
    rates: [],
    password: 'ikbNgVxUBn21kMa',
    status: 'particulier',
    gender: 'homme'
},
{
    name: 'Lucas',
    username: 'Lucas_Roger84',
    lastName: 'Roger',
    avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/kurafire/128.jpg',
    email: 'Lucas_Roger8415@hotmail.fr',
    birthday: '1989-11-13',
    comments: [],
    ads: [],
    rates: [],
    password: 'kQyrOZ63DkQtsa2',
    status: 'particulier',
    gender: 'homme'
},
{
    name: 'Victor',
    username: 'Victor41',
    lastName: 'Deschamps',
    avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg',
    email: 'Victor41_Deschamps29@yahoo.fr',
    birthday: '1961-09-11',
    comments: [],
    ads: [],
    rates: [],
    password: 'DEsDrTBiNCvJ7rT',
    status: 'particulier',
    gender: 'homme'
},
{
    name: 'Evan',
    username: 'Evan.Baron',
    lastName: 'Baron',
    avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ademilter/128.jpg',
    email: 'Evan.Baron77@yahoo.fr',
    birthday: '1953-08-31',
    comments: [],
    ads: [],
    rates: [],
    password: 'AnmtTgHPlNVrBhG',
    status: 'particulier',
    gender: 'homme'
},
{
    name: 'Charlotte',
    username: 'Charlotte_Guerin26',
    lastName: 'Guerin',
    avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/weglov/128.jpg',
    email: 'Charlotte_Guerin26.Paul@gmail.com',
    birthday: '1982-02-07',
    comments: [],
    ads: [],
    rates: [],
    password: 'lFNGCw9etX4IXqj',
    status: 'particulier',
    gender: 'femme'
},
{
    name: 'Océane',
    username: 'Océane.Muller',
    lastName: 'Muller',
    avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/peejfancher/128.jpg',
    email: 'Ocane.Muller35@hotmail.fr',
    birthday: '1946-04-08',
    comments: [],
    ads: [],
    rates: [],
    password: 'ybZVWPeK3YBNeMD',
    status: 'particulier',
    gender: 'femme'
},
{
    name: 'Hugo',
    username: 'Hugo_Martin26',
    lastName: 'Martin',
    avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/kurtinc/128.jpg',
    email: 'Hugo_Martin265@yahoo.fr',
    birthday: '1949-12-02',
    comments: [],
    ads: [],
    rates: [],
    password: 'D8364FCdMYb4FPt',
    status: 'particulier',
    gender: 'homme'
},
{
    name: 'Antoine',
    username: 'Antoine32',
    lastName: 'Menard',
    avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/vocino/128.jpg',
    email: 'Antoine32.Menard34@hotmail.fr',
    birthday: '1980-01-20',
    comments: [],
    ads: [],
    rates: [],
    password: 'SpBWDN9h_DCjrjl',
    status: 'particulier',
    gender: 'homme'
},
{
    name: 'Tom',
    username: 'Tom25',
    lastName: 'Gradur',
    avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/maikelk/128.jpg',
    email: 'Tom2576@gmail.com',
    birthday: '1960-08-25',
    comments: [],
    ads: [],
    rates: [],
    password: 'W1xGfzmSHY0A3o5',
    status: 'particulier',
    gender: 'homme'
},
{
    name: 'Antoine',
    username: 'Antoine.Leclerc',
    lastName: 'Leclerc',
    avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/pmeissner/128.jpg',
    email: 'Antoine.Leclerc.Huet@hotmail.fr',
    birthday: '1946-12-23',
    comments: [],
    ads: [],
    rates: [],
    password: 'lXTO3ZYwvA274hN',
    status: 'particulier',
    gender: 'homme'
},
{
    name: 'Clémence',
    username: 'Clémence69',
    lastName: 'Faure',
    avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/kinday/128.jpg',
    email: 'Clmence69_Faure48@hotmail.fr',
    birthday: '1973-02-05',
    comments: [],
    ads: [],
    rates: [],
    password: 'kvzcOuzYdEVMywO',
    status: 'particulier',
    gender: 'femme'
},
{
    name: 'Sarah',
    username: 'Sarah99',
    lastName: 'Huet',
    avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/AlbertoCococi/128.jpg',
    email: 'Sarah99.Huet@yahoo.fr',
    birthday: '1979-07-29',
    comments: [],
    ads: [],
    rates: [],
    password: 'nBpbgR3QP7DqYbi',
    status: 'particulier',
    gender: 'femme'
},
{
    name: 'Julien',
    username: 'Julien.Girard96',
    lastName: 'Girard',
    avatar:
        'https://s3.amazonaws.com/uifaces/faces/twitter/stevedesigner/128.jpg',
    email: 'Julien.Girard96_Denis@yahoo.fr',
    birthday: '1955-06-18',
    comments: [],
    ads: [],
    rates: [],
    password: 'F_48EnEOvVklIkL',
    status: 'particulier',
    gender: 'homme'
}]

console.log(users)

const adModel = require("./../models/Ad");
// const commentModel = require("./../models/Comment");
// const messageModel = require("./../models/Message");
const userModel = require("./../models/User");

async function seedIt() {

  try {
    // Remove previously generated seed
    await userModel.deleteMany({ name: { $not: { $eq: 'wen' } } })
    await adModel.deleteMany({ date: { $gte: new Date(2020, 2, 5) } })

    // generate users
    const users = [{
        name: 'Mattéo',
        username: 'Mattéo.Guyot58',
        lastName: 'Guyot',
        avatar:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ManikRathee/128.jpg',
        email: 'Matto.Guyot58.Royer8@hotmail.fr',
        birthday: '1985-09-17',
        comments: [],
        ads: [],
        rates: [],
        password: 'ikbNgVxUBn21kMa',
        status: 'particulier',
        gender: 'homme'
    },
    {
        name: 'Lucas',
        username: 'Lucas_Roger84',
        lastName: 'Roger',
        avatar:
            'https://s3.amazonaws.com/uifaces/faces/twitter/kurafire/128.jpg',
        email: 'Lucas_Roger8415@hotmail.fr',
        birthday: '1989-11-13',
        comments: [],
        ads: [],
        rates: [],
        password: 'kQyrOZ63DkQtsa2',
        status: 'particulier',
        gender: 'homme'
    },
    {
        name: 'Victor',
        username: 'Victor41',
        lastName: 'Deschamps',
        avatar:
            'https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg',
        email: 'Victor41_Deschamps29@yahoo.fr',
        birthday: '1961-09-11',
        comments: [],
        ads: [],
        rates: [],
        password: 'DEsDrTBiNCvJ7rT',
        status: 'particulier',
        gender: 'homme'
    },
    {
        name: 'Evan',
        username: 'Evan.Baron',
        lastName: 'Baron',
        avatar:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ademilter/128.jpg',
        email: 'Evan.Baron77@yahoo.fr',
        birthday: '1953-08-31',
        comments: [],
        ads: [],
        rates: [],
        password: 'AnmtTgHPlNVrBhG',
        status: 'particulier',
        gender: 'homme'
    },
    {
        name: 'Charlotte',
        username: 'Charlotte_Guerin26',
        lastName: 'Guerin',
        avatar:
            'https://s3.amazonaws.com/uifaces/faces/twitter/weglov/128.jpg',
        email: 'Charlotte_Guerin26.Paul@gmail.com',
        birthday: '1982-02-07',
        comments: [],
        ads: [],
        rates: [],
        password: 'lFNGCw9etX4IXqj',
        status: 'particulier',
        gender: 'femme'
    },
    {
        name: 'Océane',
        username: 'Océane.Muller',
        lastName: 'Muller',
        avatar:
            'https://s3.amazonaws.com/uifaces/faces/twitter/peejfancher/128.jpg',
        email: 'Ocane.Muller35@hotmail.fr',
        birthday: '1946-04-08',
        comments: [],
        ads: [],
        rates: [],
        password: 'ybZVWPeK3YBNeMD',
        status: 'particulier',
        gender: 'femme'
    },
    {
        name: 'Hugo',
        username: 'Hugo_Martin26',
        lastName: 'Martin',
        avatar:
            'https://s3.amazonaws.com/uifaces/faces/twitter/kurtinc/128.jpg',
        email: 'Hugo_Martin265@yahoo.fr',
        birthday: '1949-12-02',
        comments: [],
        ads: [],
        rates: [],
        password: 'D8364FCdMYb4FPt',
        status: 'particulier',
        gender: 'homme'
    },
    {
        name: 'Antoine',
        username: 'Antoine32',
        lastName: 'Menard',
        avatar:
            'https://s3.amazonaws.com/uifaces/faces/twitter/vocino/128.jpg',
        email: 'Antoine32.Menard34@hotmail.fr',
        birthday: '1980-01-20',
        comments: [],
        ads: [],
        rates: [],
        password: 'SpBWDN9h_DCjrjl',
        status: 'particulier',
        gender: 'homme'
    },
    {
        name: 'Tom',
        username: 'Tom25',
        lastName: 'Gradur',
        avatar:
            'https://s3.amazonaws.com/uifaces/faces/twitter/maikelk/128.jpg',
        email: 'Tom2576@gmail.com',
        birthday: '1960-08-25',
        comments: [],
        ads: [],
        rates: [],
        password: 'W1xGfzmSHY0A3o5',
        status: 'particulier',
        gender: 'homme'
    },
    {
        name: 'Antoine',
        username: 'Antoine.Leclerc',
        lastName: 'Leclerc',
        avatar:
            'https://s3.amazonaws.com/uifaces/faces/twitter/pmeissner/128.jpg',
        email: 'Antoine.Leclerc.Huet@hotmail.fr',
        birthday: '1946-12-23',
        comments: [],
        ads: [],
        rates: [],
        password: 'lXTO3ZYwvA274hN',
        status: 'particulier',
        gender: 'homme'
    },
    {
        name: 'Clémence',
        username: 'Clémence69',
        lastName: 'Faure',
        avatar:
            'https://s3.amazonaws.com/uifaces/faces/twitter/kinday/128.jpg',
        email: 'Clmence69_Faure48@hotmail.fr',
        birthday: '1973-02-05',
        comments: [],
        ads: [],
        rates: [],
        password: 'kvzcOuzYdEVMywO',
        status: 'particulier',
        gender: 'femme'
    },
    {
        name: 'Sarah',
        username: 'Sarah99',
        lastName: 'Huet',
        avatar:
            'https://s3.amazonaws.com/uifaces/faces/twitter/AlbertoCococi/128.jpg',
        email: 'Sarah99.Huet@yahoo.fr',
        birthday: '1979-07-29',
        comments: [],
        ads: [],
        rates: [],
        password: 'nBpbgR3QP7DqYbi',
        status: 'particulier',
        gender: 'femme'
    },
    {
        name: 'Julien',
        username: 'Julien.Girard96',
        lastName: 'Girard',
        avatar:
            'https://s3.amazonaws.com/uifaces/faces/twitter/stevedesigner/128.jpg',
        email: 'Julien.Girard96_Denis@yahoo.fr',
        birthday: '1955-06-18',
        comments: [],
        ads: [],
        rates: [],
        password: 'F_48EnEOvVklIkL',
        status: 'particulier',
        gender: 'homme'
    }]

    const usersSeed = await userModel.create(users);
    console.log(usersSeed)

    // generate ads
    const ads = [
        {
            title: "Aide administrative",
            // recipient: "", //ID of user
            category: "Administratif",
            description: "Pour les personnes qui ont la phobie administrative.",
            adType: "service",
            address: {
                street: "6 Rue Brémontier",
                zipCode: 75017,
                city: 'Paris'
            },
            location: {
                type: 'Point',
                coordinates: [2.3046092, 48.884345]
            },
            image: "/administratif-default-image.png",
            availability: '2 heures, 1 fois par semaine le lundi.'
        },
        {
            title: "Repassage",
            // recipient: "", //ID of user
            category: "Aide Ménagère",
            description: "Avec mon accident eu recemment (fracture du poignet), je n'arrive plus à gérer mon linge, j'aurais donc besoin d'une aimable personne pour me repasser quelques affaires svp.",
            adType: "demande",
            address: {
                street: "32 Rue Berger",
                zipCode: 75001,
                city: 'Paris'
            },
            location: {
                type: 'Point',
                coordinates: [2.3435399, 48.8619644]
            },
            image: "/aide-menagere-default-image.jpg",
            availability: 'Tous les soirs de la semaine, à partir de 18h et/ou le weekend selon dispo. Merci'
        },
        {
            title: "Bricoleuse passionnée",
            // recipient: "", //ID of user
            category: "Bricolage",
            description: "Eh oui je suis une fille mais j'adore bricoler ! Alors je propose mon aide pour les personnes en difficulté.",
            adType: "service",
            address: {
                street: "111 Boulevard Bineau",
                zipCode: 92200,
                city: 'Neuilly-sur-Seine'
            },
            location: {
                type: 'Point',
                coordinates: [2.2743524, 48.8882359]
            },
            image: "/bricolage-default-image.jpg",
            availability: 'Jusqu\'à 2 heures, une fois par semaine, le dimanche.'
        },
        {
            title: "SOS courses",
            // recipient: "", //ID of user
            category: "Courses",
            description: "Pour des raisons de santé, je suis temporairement alitée et je ne peux donc pas faire de courses. C'est pour cela que je demande une aide svp.",
            adType: "demande",
            address: {
                street: "53 Rue de Billancourt",
                zipCode: 92100,
                city: 'Boulogne-Billancourt'
            },
            location: {
                type: 'Point',
                coordinates: [2.236266851425171, 48.838382720947266]
            },
            image: "/courses-default-image.jpeg",
            availability: 'Je m\'adapte, Dispo tous les jours de la semaine.'
        },
        {
            title: "Cours particuliers d\'Anglais",
            // recipient: "", //ID of user
            category: "Cours Particuliers",
            description: "Souhaitant pratiquer mon anglais, j'aimerais beaucoup donner des cours.",
            adType: "service",
            address: {
                street: "19 Impasse Larmeroux",
                zipCode: 92170,
                city: 'Vanves'
            },
            location: {
                type: 'Point',
                coordinates: [2.2848074, 48.8188916]
            },
            image: "/cours-particuliers-default-image.jpg",
            availability: 'Une fois par semaine (le soir), le mercredi.'
        },
        {
            title: "Anti-gaspillage",
            // recipient: "", //ID of user
            category: "Don(s)",
            description: "Cette annonce s'adresse aux personnes qui possèdent un jardin (à Paris pourquoi pas :) !?) et qui auraient la gentillesse de partager des fruits et/ou légumes frais svp.",
            adType: "demande",
            address: {
                street: "57 Rue de la Tombe Issoire",
                zipCode: 75014,
                city: 'Paris'
            },
            location: {
                type: 'Point',
                coordinates: [2.3338087, 48.8295595]
            },
            image: "/dons-default-image2.jpg",
            availability: 'Me contacter pour les soirs dans la semaines.'
        },
        {
            title: "Gros bras, grosse bagniole pour déménagement",
            // recipient: "", //ID of user
            category: "Transport/Déménagement",
            description: "Comme le titre l'indique, je possède un camion et des gros bras pour aider lors d'un déménagement.",
            adType: "service",
            address: {
                street: "18 Rue Edmée Guillou",
                zipCode: 94200,
                city: 'Ivry-sur-Seine'
            },
            location: {
                type: 'Point',
                coordinates: [2.3979565, 48.8160065]
            },
            image: "/transport-default-image.jpg",
            availability: 'Tous les samedis, de 10h à 15h.'
        },
        {
            title: "Visite de courtoisie",
            // recipient: "", //ID of user
            category: "Visite(s) de Courtoisie",
            description: "Je suis une personne seule qui souhaiterait partager tout simplement un moment de sociabilité autour d'un thé, un café ou un gin !",
            adType: "demande",
            address: {
                street: "9 Rue Michelet",
                zipCode: 94300,
                city: 'Vincennes'
            },
            location: {
                type: 'Point',
                coordinates: [2.433674, 48.852509]
            },
            image: "/visite-de-courtoisie-default-image.jpeg",
            availability: 'Evidemment je suis dispo tous les jours et à toute heure ;).'
        }
    ]
        .map((ad, index) => ({ // add authors to ads using fresh generated user _id
            ...ad,
            author: ObjectId(usersSeed[index]._id),
        }))

    const adSeed = await adModel.create(ads);
    console.log(adSeed)

    console.log("All good");
    process.exit();
  }
  catch (err) {
    console.error(err)
  }
}

seedIt()

