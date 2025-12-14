# Firestore Security Rules Configuration

## Current Issue
The chat feature requires Firestore security rules that allow unauthenticated reads and writes to the `messages` collection.

## Required Rules

Go to Firebase Console → Firestore Database → Rules and update your rules to:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow anyone to read and write messages (for anonymous chat)
    match /messages/{messageId} {
      allow read, write: if true;
    }
    
    // Keep other collections protected if needed
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Deny all other access by default
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

## Steps to Update Rules

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `web-design-finals-project`
3. Navigate to **Firestore Database** → **Rules** tab
4. Replace the existing rules with the rules above
5. Click **Publish**

## Security Note

⚠️ **Warning**: The rules above allow anyone to read and write messages without authentication. For production, consider:
- Adding rate limiting
- Implementing moderation
- Using Firebase App Check
- Adding content validation

## Testing

After updating the rules:
1. Refresh your app
2. Try sending a message
3. Messages should appear in the chat
4. Check browser console for any remaining errors



