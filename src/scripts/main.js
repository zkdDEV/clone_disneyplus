document.addEventListener('DOMContentLoaded', function()
{
    /*
        Pegando todos os botões que possuem o atributo "data-tab-button"
        | Quando vai pegar um atributo do elemento, deve colocar os colchetes
    */
    const buttons = document.querySelectorAll('[data-tab-button]')
    const questions = document.querySelectorAll('[data-faq-question]')

    // Pegando a seção para atualizar o cabeçalho após passar por ele
    const heroSection = document.querySelector('.hero')
    // Descobrindo a altura
    const alturaHero = heroSection.clientHeight

    window.addEventListener('scroll', function()
    {
        const posicaoAtual = window.scrollY

        if(posicaoAtual < alturaHero)
        {
            ocultaElementosDoHeader()
        }
        else
        {
            exibeElementosDoHeader()
        }
    })
    
    // seção de atrações, programação das abas
    for(let i = 0; i < buttons.length; i++)
    {
        buttons[i].addEventListener('click', function(botao)
        {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeTodasAbas()
            aba.classList.add('shows__list--is-active')
            removeBotaoAtivo()
            botao.target.classList.add('shows__tabs__button--is-active')
        })
    }

    // Seção FAQ, programação dos accordions
    for(let i = 0; i < questions.length; i++)
    {
        questions[i].addEventListener('click', abreOuFechaResposta)
    }
})

function exibeElementosDoHeader()
{
    const header = document.querySelector('header')
    header.classList.remove('header--is-hidden')
}

function ocultaElementosDoHeader()
{
    const header = document.querySelector('header')
    header.classList.add('header--is-hidden')
}

// O elemento é o questions que deve fazer a ação
function abreOuFechaResposta(elemento)
{
    // Pegando a classe que deve ser adicionada
    const classe = 'faq__questions__item--is-open'
    const elementoPai = elemento.target.parentNode
    elementoPai.classList.toggle(classe)
}


function removeBotaoAtivo()
{
    const buttons = document.querySelectorAll('[data-tab-button]')

    for(let i = 0; i < buttons.length; i++)
    {
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}

function escondeTodasAbas()
{
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    for(let i = 0; i < tabsContainer.length; i++)
    {
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}