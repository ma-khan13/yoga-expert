import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Blog = () => {
    return (
      <Container>
        <h1 className="my-3">Question answer section</h1>
        <Row>
          <Col md={10}>
            <div>
              <h3 className="mb-3">
                A. Authentication এবং Authorization এর মধ্যে পার্থক্য
              </h3>
              <h4>1. Authentication.</h4>
              <p>
                Authentication হলো ওয়েবসাইট এর এমন একটি সিস্টেম যার সাহায্যে
                ওয়েবসাইট এর বিশেষ কোনো data user accsess করতে চাইলে user টি
                ভ্যালিড ইউসার কিনা তা যাচাই কোরে দেখে যেমনঃ ইউসার টি লগ ইন করা
                আছে কিনা user লগইন করার সময় যেই ইমেইল পাসওয়ার্ড দিচ্ছে তা ঠিক
                আছে কিনা
              </p>
            </div>
            <div>
              <h4>2. Authorization.</h4>
              <p>
                Authorization সিস্টেম এর মাধ্যমে কোনো ইউসার একটি ওয়েবসাইট এর ঠিক
                কোন কাজ গুলি করতে পারবে সেই সিদ্ধান্ত টা নিয়ে থাকে যেমনঃ admin
                একটি ওয়েবসাইট এর সুম্পন্ন সিস্টেম নিয়ন্ত্রণ করতে পারে । আবার
                মডারেটর admin এর মতো এতটা accessibility পাই না । ইত্যাদি
              </p>
            </div>

            <div>
              <h3 className="mb-3">
                B. Why are you using firebase? What other options do you have to
                implement authentication?
              </h3>
              <h4>1. Why are you using firebase?</h4>
              <p>
                Firebase use করার অনেকগুলো কারণ রয়েছে firebase use করে আমরা
                অনেক সহজে একটা user কে SignUp বা SignIn করতে পারি (Google ,
                Github , Facebook ) ইত্যাদির মাধ্যমে । আবার পাসওয়ার্ড Email
                verification পাসওয়ার্ড রিসেট এর মতো জটিল কাজ গুলো অনেক সহজে
                হ্যান্ডেল করা যাই । ফিরেবসে আমাদের ইউসার এর ডাটার অনেক ভালো
                security দিয়ে থাকে ।
              </p>
            </div>
            <div>
              <h4>
                2. What other options do you have to implement authentication?
              </h4>
              <p>
                Firebase এর মতো সার্ভিস দিয়ে থাকে এমন কয়টি সার্ভিস এর নাম যেমনঃ
                1. Parse 2. Back4App 3. AWS Amplify 4. Kuzzle 5. Couchbase 6.
                NativeScript 7. RxDB 8. Flutter 9. LoopBack 10. SashiDo
              </p>
            </div>

            <div>
              <h3 className="mb-3">
                C. What other services does firebase provide other than
                authentication
              </h3>
              <h4>1. Firebase other services</h4>
              <p>
                Firebase Authentication এর পাশাপাশি আরো যে সকল সার্ভিসেস provide
                করে থাকে 1.Cloud Firestore. 2.Cloud Functions. 3.Cloud Storage.
                4.Firebase Hosting. 5.Cloud Messaging. 7.Google Analytics.
                8.Firebase Realtime Database.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
};

export default Blog;