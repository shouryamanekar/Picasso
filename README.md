
# Picasso

Picasso is an open-source artificial intelligence project that generates images from natural language text descriptions. With Picasso, users can express their ideas using text, and the AI system transforms those words into visual art.

## Features

- Generate images from textual descriptions.
- Creative and imaginative text-to-image transformation.
- User-friendly interface for easy interaction.
- [Optional] Advanced customization and style options.

## Requirements

1. Google account
2. Drive Storage: Min. 10GB
3. Ngrok authtoken

## Installation

COLLAB
1. Download all the files

2. Create a Folder named "Models" and Upload all the files to that folder

3. Now add these two files to that folder:
   ```
   SD 1.5: https://drive.google.com/file/d/1dm7eFjXb5S1WSMoyr8bVEZv3WWdos4Ru/view?usp=drive_link
   SD 2:  https://drive.google.com/file/d/1DUxAxG3Q4qEGjiuXXy7TUT0fB92U4x3Y/view?usp=drive_link
   ```
   
4. Replace auth token:
   ```
   !./ngrok authtoken "your authtoken"
   ```
6. Run the the "Server.ipynb" file in Google Collab
8. Changed the runtime to GPU
9. Click to Run All
10. Scroll Down to the end
11. Click on the Link
    ```
    * Running on "Click on this link"
    ```


ANDROID

To get started with Picasso App, visit the following link: https://github.com/shouryamanekar/PicassoApp.git


## Usage

1. Launch the Picasso app.
2. Enter a descriptive text in the input field.
3. Press the "Generate" button to create an image based on your description.
4. Explore the artistic interpretations and share or save the generated images.

## Configuration

TextArtify uses Firebase for authentication and backend services. To configure Firebase, follow these steps:

1. Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).

2. Add your Firebase configuration to the `lib/main.dart` file:
   ```dart
   await Firebase.initializeApp(
     options: FirebaseOptions(
       apiKey: 'your_api_key',
       authDomain: 'your_project_id.firebaseapp.com',
       databaseURL: 'https://your_project_id.firebaseio.com',
       projectId: 'your_project_id',
       storageBucket: 'your_project_id.appspot.com',
       messagingSenderId: 'your_messaging_sender_id',
       appId: 'your_app_id',
     ),
   );
   ```

## Screenshots

![image](https://github.com/shouryamanekar/Picasso/assets/72398499/f45493ed-f0f0-4b73-8502-5d76cf769423)

![image](https://github.com/shouryamanekar/Picasso/assets/72398499/73bc04b9-6811-47f6-b052-78fe35dede2b)




## Contributing

We welcome contributions from the community. If you'd like to contribute to Picasso, please follow our [Contributing Guidelines](CONTRIBUTING.md).

## License

Picasso is released under the [MIT License](docs/LICENSE).

## Acknowledgments

- We thank the open-source community and the contributors for making this project possible.
- Special thanks to [Stable Diffusion](https://github.com/stable-diffusion) for the core text-to-image generation technology.

## Contact

If you have any questions or suggestions, please contact us at [speedk143.dev@gmail.com](mailto:speedk143.dev@gmail.com).

---
