# Project Setup

## Prerequisites

- **Node.js**: v21 or higher
- **API Keys**:
  - **Gemini API Key** → [Setup Instructions](https://ai.google.dev/gemini-api/docs)
  - **Foursquare API Key** → [Setup Instructions](https://docs.foursquare.com/developer/reference/places-api-get-started)

---

## Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/ReidoBoss/restaurant-finder
   cd restaurant-finder
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` file in the project root**

4. **Add the required environment variables**

   ```env
    # Server
    TZ=UTC
    PORT=3333
    HOST=0.0.0.0
    LOG_LEVEL=info
    APP_KEY=<YOUR_APP_KEY_HERE> # you can use random chars, 16 minimum
    NODE_ENV=development

    # API Secret
    API_SECRET=<YOUR_API_SECRET_HERE> # the `code` params to be used in the endpoint

    # Foursquare
    FSQR_API_KEY=<YOUR_FSQR_API_KEY_HERE>
    FSQR_API_URL=https://places-api.foursquare.com
    FSQR_API_VERSION=2025-06-17

    # Gemini
    GEMINI_API_KEY=<YOUR_GEMINI_API_KEY_HERE>
   ```

5. **Run the project locally**
   ```bash
   npm run dev
   ```

---

## Configuration Notes

- The `.env` file must be created manually in the root folder.
- Ensure API keys are valid and active for the project to function properly.
