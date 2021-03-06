
<!-- README.md is generated from README.Rmd. Please edit that file -->

### {confetti} <img src="man/figures/logo.png" align="right" height="138" />

<!-- badges: start -->

[![Lifecycle:
experimental](https://img.shields.io/badge/lifecycle-experimental-orange.svg)](https://lifecycle.r-lib.org/articles/stages.html#experimental)
[![R-CMD-check](https://github.com/ArthurData/confetti/workflows/R-CMD-check/badge.svg)](https://github.com/ArthurData/confetti/actions)
[![Codecov test
coverage](https://codecov.io/gh/ArthurData/confetti/branch/main/graph/badge.svg)](https://app.codecov.io/gh/ArthurData/confetti?branch=main)
<!-- badges: end -->

The goal of `{confetti}` is to put some π confetti π in your Shiny
Application.

This package uses a JavaScript library called:
**[canvas-confetti](https://github.com/catdad/canvas-confetti)**.

#### Installation

You can install the development version of confetti from
[GitHub](https://github.com/) with:

``` r
# install.packages("devtools")
devtools::install_github("ArthurData/confetti")
```

#### Example

Letβs make a fun application with some confetti!

β  You will have to open your app in a new window with your favorite web
browser to see confetti.

``` r
library(confetti)
library(shiny)
```

First, you have to use `useConfetti()` in the UI of your Shiny app. This
function will attach all depencies for you.

``` r
ui <- fluidRow(
  useConfetti(),
  actionButton(
    inputId = "go",
    label =  "Default confetti"
  ),
  actionButton(
    inputId = "go2",
    label = "Colored confetti"
  )
)
```

Then, in you server, call the `sendConfetti()` function whatever you
want.

Here, every time an `actionButton` is clicked, the according
`observeEvent` is launch and send confetti.

A dedicated input called `sentConfetti` is added and counts the number
of times confetti is sent.

``` r
server <- function(input, output, session) {
  observeEvent(input$go, {
    sendConfetti()
    message("You have sent ", input$sentConfetti, " confetti")
  })

  observeEvent(input$go2, {
    sendConfetti(
      colors = list("#DAB436", "#36DA62", "#365CDA", "#DA36AE")
    )
    message("You have sent ", input$sentConfetti, " confetti")
  })
}
```

Full code:

<details>

``` r
library(confetti)
library(shiny)

ui <- fluidRow(
  useConfetti(),
  actionButton(
    inputId = "go",
    label =  "Default confetti"
  ),
  actionButton(
    inputId = "go2",
    label = "Colored confetti"
  )
)

server <- function(input, output, session) {
  observeEvent(input$go, {
    sendConfetti()
    message("You have sent ", input$sentConfetti, " confetti")
  })

  observeEvent(input$go2, {
    sendConfetti(
      colors = list("#DAB436", "#36DA62", "#365CDA", "#DA36AE")
    )
    message("You have sent ", input$sentConfetti, " confetti")
  })
}

shinyApp(ui = ui, server = server)
```

</details>

or run this example:

``` r
runApp(system.file("shiny", "example", "app.R", package = "confetti"))
```

#### Code of Conduct

Please note that the confetti project is released with a [Contributor
Code of
Conduct](https://contributor-covenant.org/version/2/0/CODE_OF_CONDUCT.html).
By contributing to this project, you agree to abide by its terms.
