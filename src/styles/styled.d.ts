// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryText: '#11052C' // question text color
      secondaryText: '#2D264B' // answer text color
      themeText: '#000000'
      themeColor: '#800080'
      themeGradient: 'linear-gradient(to right,#800080, #FFC0CB)'
      background: '#E5E5E5'
      cardBackground: '#FFFFFF'
      selectTopicBg: '#FFFFFF'
      appLogo: '#000000'
      buttonText: '#FFFFFF'
      outlineButtonText: '#800080'
      buttonBackground: 'linear-gradient(90.04deg, #800080 0.03%, #FFC0CB 99.96%)'
      selectedAnswer: '#FFD6FF'
      infoText: '#FF783F' // skip tag text
      infoBackground: '#ffb23f26' // skip tag background
      border: '#EAEAEA'
      answerBg: '#ffffff'
      disabledCard: '#fbf4ecbc'
      disabledButton: '#e7e8e9'
      success: '#12B40E'
      successLight: '#DDFFDC'
      danger: '#FF143E'
      dangerLight: '#FFD7DE'
      white: '#FFFFFF'
      black: '#000000'
      dark: '#282526'
      darkGray: '#9fa3a9'
      darkerGray: '#817a8e'
    }
    shadows: {
      activeButton: '3px 2px 22px 1px rgba(0, 0, 0, 0.24)'
    }
    fonts: {
      anekMalayalam: 'Anek Malayalam'
    }
    paddings: {
      container: '15px'
      pageTop: '30px'
    }
    margins: {
      pageTop: '30px'
    }
  }
}
