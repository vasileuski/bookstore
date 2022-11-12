export type FirebaseErrorCode =
  | "auth/email-already-in-use"
  | "auth/wrong-password"
  | "auth/user-not-found";

enum FirebaseError {
  EMAIL_ALREADY_IN_USE = "User already exists",
  WRONG_PASSWORD = "Wrong password",
  USER_NOT_FOUND = "User not found",
  UNKNOWN_ERROR = "Unknown error please reload page",
}

const getFirebaseMessage = (code: FirebaseErrorCode) => {
  switch (code) {
    case "auth/email-already-in-use":
      return FirebaseError.EMAIL_ALREADY_IN_USE;

    case "auth/wrong-password":
      return FirebaseError.WRONG_PASSWORD;

    case "auth/user-not-found":
      return FirebaseError.USER_NOT_FOUND;

    default:
      return FirebaseError.UNKNOWN_ERROR;
  }
};

export { getFirebaseMessage };
