library(shiny)
pkgload::load_all()

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
  })

  observeEvent(input$go2, {
    sendConfetti(
      colors = list("#DAB436", "#36DA62", "#365CDA", "#DA36AE")
    )
    message("You have sent ", input$sentConfetti, " confetti")
  })
}

shinyApp(ui = ui, server = server)
