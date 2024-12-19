# React Native Intermittent Crash Bug

This repository demonstrates a common yet subtle bug in React Native applications involving improper cleanup of timers or other asynchronous operations within third-party libraries.  The bug manifests as intermittent crashes, particularly after navigating between screens.  The root cause lies in the failure to properly stop timers and other asynchronous tasks when a component is unmounted.

## How to reproduce

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run the app using `npx react-native run-android` or `npx react-native run-ios`.
4. Navigate between different screens multiple times.  The crash is not guaranteed on every run but will occur eventually with enough screen transitions.

## Solution

The solution involves ensuring proper cleanup of timers and asynchronous tasks within the `componentWillUnmount` lifecycle method of the component.  This prevents the tasks from continuing to run after the component is unmounted, resolving memory leaks and crashes. See `bugSolution.js` for the corrected implementation.