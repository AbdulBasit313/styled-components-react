import styled, { createGlobalStyle, css } from 'styled-components'
import { device } from './BreakPoints'
import fontsCss from './fonts.module.css'

export const GlobalStyles = createGlobalStyle`
 ${fontsCss} // this works as a normal styled css
 
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-size: 100%;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  font-family: ${({ theme }) => theme.fonts.anekMalayalam}, sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.themeText};
  background-color: ${({ theme }) => theme.colors.white};
  line-height: 1;
}
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
figure,
blockquote,
dl,
dd {
  padding: 0;
  margin: 0;
}
button {
  border: none;
  background-color: transparent;
  font-family: inherit;
  padding: 0;
  cursor: pointer;
}
/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}
li {
  list-style-type: none;
}
/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}
/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}
/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.paddings.container};
  padding-bottom: 50px;
`
export const SmallContainer = styled.div`
  width: 100%;
  max-width: 570px;
  margin: 0 auto;
  /* padding: 0 30px; */
  padding: 0 ${({ theme }) => theme.paddings.container};
`

interface GridProps {
  columns?: number
  end?: boolean
  cgp?: number
  pt?: number
  pb?: number
  fullHeight?: boolean
  py?: number
}

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns || 2}, 1fr);
  justify-items: ${({ end }) => end && 'end'};
  grid-column-gap: calc(${({ cgp }) => cgp} * 1px);

  ${({ pt }) =>
    pt &&
    css`
      padding-top: calc(${pt} * 1px);
    `}

  ${({ pb }) =>
    pb &&
    css`
      padding-bottom: calc(${pb} * 1px);
    `}

  ${({ fullHeight }) =>
    fullHeight &&
    css`
      height: 100%;
    `}

  ${({ py }) =>
    py &&
    css`
      padding-top: calc(${py} * 1px);
      padding-bottom: calc(${py} * 1px);
    `}
`

interface BoxProps {
  mt?: number
  flxRight?: boolean
  smNone?: boolean
}

export const Box = styled.div<BoxProps>`
  margin-top: calc(${({ mt }) => mt} * 1px);

  ${({ flxRight }) =>
    flxRight &&
    css`
      display: flex;
      justify-content: flex-end;
    `}

  ${({ smNone }) =>
    smNone &&
    css`
      ${SmallDevicesHidden}
    `}
`

export const AbsCenter = css`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const SmallDeviceShow = css`
  @media screen and (min-width: 600px) {
    display: none;
  }
`

export const SmallDevicesHidden = css`
  @media ${device.sm} {
    display: none;
  }
`

interface FlexProps {
  center?: boolean
  spaceBetween?: boolean
  evenly?: boolean
  flxEnd?: boolean
  gap?: string
  // Add any other necessary props
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  ${({ center }) =>
    center &&
    css`
      justify-content: center;
      align-items: center;
    `}
  ${({ spaceBetween }) =>
    spaceBetween &&
    css`
      justify-content: space-between;
      align-items: center;
    `}
  ${({ evenly }) =>
    evenly &&
    css`
      justify-content: space-evenly;
      align-items: center;
    `}
  ${({ flxEnd }) =>
    flxEnd &&
    css`
      justify-content: flex-end;
      align-items: center;
    `}
  ${({ gap }) =>
    gap &&
    css`
      gap: ${gap};
    `}
`

interface ResizableBoxProps {
  width: string | number
}

export const ResizableBox = styled.div<ResizableBoxProps>`
  width: ${(props) =>
    typeof props.width === 'string' ? props.width : `${props.width}px`};
`
