Here is a simple flow chart:

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: HTTP status code 201 :  [{ "content": "nsingle page app does not reload the whole page", "date": "2025-1-1" }, ... ]
    deactivate server

    note: 

```