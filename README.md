<h1>AwesomeProject</h1>
<p>Welcome to this AwesomeProject. The objective with this project,
is to show how the developer (vimis22) has solved tasks given by Pentia ApS.</p>
<p>A heartly thanks to Mr. Khan and Mr. Stær Grove for giving the opportunity to improve my skills.</p>

<h2>Get Started!</h2>
<p>To get started with the project, please use the following command to run on IOS.</p>
<p>First, start the Metro Bundler in order to make the Emulator start.</p>

```
npx react-native start
```

<p>Now run this command in a seperate terminal. Then the Xcode Terminal will popup.</p>

```
npm run ios
```
<h2>Experiencing Problems</h2>
<p>If you're experiencing any problems, please use the following command to re-install all dependencies.</p>

```
watchman watch-del-all
rm -rf node_modules
rm -rf ios/build
npm cache clean --force
npm install
cd ios && pod install && cd ..
npx react-native start --reset-cache
npx react-native run-ios
```
<p>If you're still experiencing problems, then please try and installing the following dependencies.
These dependencies are useful especially, when it comes to navigation and display on the emulator.</p>

```
npm install @react-navigation/native
npm install @react-navigation/stack
npm install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons
```

<h3>Notes from Developer</h3>
<p>Task5.tsx is equivalent to the file Overview, as described in the task.</p>
<p>The add button inside the Task5 is not working. I have tried to debug the problem,
with the use of different tools but it has not worked.</p>
<p>Feel free to contact back for more enquiries.</p>
