# How to Fix 404 Errors on AWS Amplify for React/Vite SPAs

Since you are hosting a Single Page Application (SPA) on AWS Amplify, you need to configure a specific **Rewrite Rule** to direct all traffic to `index.html`. Without this, deep links (like `/mobile-app-development`) will return a 404 error because Amplify tries to find a folder matching that name instead of letting React Router handle it.

## Step-by-Step Instructions

1.  **Log in to the AWS Management Console**.
2.  Go to **AWS Amplify**.
3.  Select your app (**nvhotech-stellar-webscape**).
4.  In the left sidebar menu, navigate to **Hosting** > **Rewrites and redirects**.
5.  Click **Manage rewrites and redirects** (or "Edit").
6.  Click **Add rule**.
7.  Enter the following details for the new rule (this must be the **first** rule or have high priority):

    *   **Source address**: 
        ```regex
        </^[^.]+$|\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|woff2|ttf|map|json)$)([^.]+$)/>
        ```
    *   **Target address**: 
        ```
        /index.html
        ```
    *   **Type**: `200 (Rewrite)`

8.  Click **Save**.

## Why is this necessary?

This regular expression matches any URL that **does not** end with a file extension (like .css, .js, .png). It tells AWS Amplify request, "If the user asks for a path like `/mobile-app-development` and it's not a static file, serve `index.html` instead."

Once `index.html` loads, React Router takes over, reads the URL, and renders the correct page component.

## Verifying the Fix

1. Wait a moment for the changes to propagate.
2. Visit `https://nvhotech.in/mobile-app-development` directly.
3. Refresh the page. It should reload correctly without a 404 error.
