library(shiny)
library(confetti)

ui <- fluidRow(
  useConfetti(),
  actionButton(
    inputId = "go",
    label =  "Default fireworks"
  )
)

server <- function(input, output, session) {
  observeEvent(input$go, {
    sendfireworks(
      duration = 5,
      colors = list("#DAB436", "#36DA62", "#365CDA")
    )
  })
}

shinyApp(ui = ui, server = server)
