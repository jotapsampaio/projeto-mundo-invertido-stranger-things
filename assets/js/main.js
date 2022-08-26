
import { subscriptionToHellfireClub } from './firebase/hellfire-club.js'


const txtName = document.getElementById('txtName');
const txtEmail = document.getElementById('txtEmail')
const txtLevel = document.getElementById('txtLevel')
const txtCharacter = document.getElementById('txtCharacter')

const btnSubscribe = document.getElementById('btnSubscribe')

btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        nome: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }

    const subscriptionId = await subscriptionToHellfireClub(subscription)
    console.log('Inscrito com sucesso: ${subscriptionId}')

    txtName.valeu = ''
    txtEmail.value = ''
    txtLevel.value = ''
    txtCharacter.value = ''
})

async function loadData() {
    const subscriptions = await getHellfireClubSubscriptions()
    console.log(subscriptions)

    loadData()
}

