export type FirebaseErrorCode =
  | "auth/email-already-in-use"
  | "auth/invalid-email"
  | "auth/wrong-password"
  | "auth/user-not-found";

export enum FirebaseError {
  EMAIL_ALREADY_IN_USE = "Hey, boy! This email is used 🤡",
  WRONG_PASSWORD = "Invalid password",
  WRONG_EMAIL = "Invalid email",
  NOT_FOUND = "User not found, please enter correct email",
  UNKNOWN_ERROR = "Unknown error, please reload page",
}

export const getFirebaseMessage = (error: FirebaseErrorCode): FirebaseError => {
  switch (error) {
    case "auth/email-already-in-use":
      return FirebaseError.EMAIL_ALREADY_IN_USE;
    case "auth/wrong-password":
      return FirebaseError.WRONG_PASSWORD;
    case "auth/invalid-email":
      return FirebaseError.WRONG_EMAIL;
    case "auth/user-not-found":
      return FirebaseError.NOT_FOUND;

    default:
      return FirebaseError.UNKNOWN_ERROR;
  }
};
