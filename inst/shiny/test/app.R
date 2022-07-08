library(shiny)
library(confetti)

ui <- fluidRow(
  useConfetti(),
  actionButton(
    inputId = "go",
    label =  "Default confetti"
  )
)

server <- function(input, output, session) {
  observeEvent(input$go, {
    sendConfetti()
  })
}

shinyApp(ui = ui, server = server)
