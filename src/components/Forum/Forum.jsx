import { useState, useEffect } from 'react';
import { auth, signInWithGoogle } from '../Firebase/Firebase'; // Ensure correct import path
import axios from 'axios';
import Modal from 'react-modal';
import { IoClose } from 'react-icons/io5';
import { BiMessageDetail, BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

Modal.setAppElement('#root');

const Forum = () => {
    const [user, setUser] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [question, setQuestion] = useState('');
    const [questions, setQuestions] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    const questionsPerPage = 5;

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });
        fetchQuestions();
        return () => unsubscribe();
    }, []);

    const fetchQuestions = async () => {
        const response = await axios.get('http://localhost:5000/questions');
        setQuestions(response.data);
    };

    const handleQuestionSubmit = async () => {
        if (question.trim() === '') {
            alert('Question cannot be empty');
            return;
        }

        const newQuestion = {
            question,
            upvotes: [],
            downvotes: [],
            userId: user.uid,
            userName: user.displayName,
            userEmail: user.email,
            userProfilePic: user.photoURL,
            timestamp: new Date(),
        };

        await axios.post('http://localhost:5000/questions', newQuestion);
        setModalIsOpen(false);
        setQuestion('');
        fetchQuestions();
    };
    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp);
        const now = new Date();
        const diffInMs = now - date;
        const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));

        if (diffInHours < 24) {
            return `${diffInHours} hours ago`;
        } else {
            return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
        }
    };

    const handleUpvote = async (questionId) => {
        if (!user) {
            signInWithGoogle();
            return;
        }

        await axios.put(`http://localhost:5000/questions/upvote/${questionId}`, {
            userId: user.uid,
            userName: user.displayName,
            userEmail: user.email,
            userProfilePic: user.photoURL,
        });
        fetchQuestions();
    };

    const handleDownvote = async (questionId) => {
        if (!user) {
            signInWithGoogle();
            return;
        }

        await axios.put(`http://localhost:5000/questions/downvote/${questionId}`, {
            userId: user.uid,
            userName: user.displayName,
            userEmail: user.email,
            userProfilePic: user.photoURL,
        });
        fetchQuestions();
    };

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    // Pagination logic
    const indexOfLastQuestion = currentPage * questionsPerPage;
    const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
    const currentQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);
    const totalPages = Math.ceil(questions.length / questionsPerPage);
    const handleReplyClick = (questionId) => {
        navigate(`/question/${questionId}`); // Navigate to the detailed page
    };
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="flex justify-center text-center relative w-full max-w-[1366px]">
                <p className="text-[#999999] text-base w-[900px] mt-[50px]">
                    Welcome to Estatein's Contact Us page. We're here to assist you with
                    any inquiries, requests, or feedback you may have. Whether you're
                    looking to buy or sell a property, explore investment opportunities,
                    or simply want to connect, we're just a message away. Reach out to us,
                    and let's start a conversation.
                </p>
            </div>
            <div>
                <button
                    className="px-6 py-3 bg-white text-[#2447F9] rounded-full font-bold justify-center items-center my-16"
                    onClick={openModal}
                >
                    Ask a question
                </button>
            </div>

            <input
                type="text"
                placeholder="Search something"
                className="w-full max-w-[900px] p-4 rounded-lg mb-8 bg-[#1A1A1A] border border-black/20 lg:mx-0 px-[2rem]"
            />
            {currentQuestions.map((q) => (
                <div key={q._id} className="bg-[#1A1A1A] text-white rounded-lg p-4 my-4 w-full max-w-[900px] mx-[2rem] lg:mx-0 cursor-pointer" onClick={() => handleReplyClick(q._id)}>
                    <div className="flex justify-between">
                        <div className="flex items-center space-x-4">
                            <img src={q.userProfilePic} alt={q.userName} className="w-10 h-10 rounded-full" />
                            <p className="text-lg font-bold">{q.userName}</p>
                        </div>
                        <div className="text-base font-bold text-[#7A757D] flex flex-col items-end">
                            <span>{formatTimestamp(q.timestamp)}</span>
                            <span>{new Date(q.timestamp).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}</span>
                        </div>
                    </div>
                    <p className="my-4">{q.question}</p>
                    <div className="flex justify-between">
                        <div className="flex space-x-4">
                            <button className="flex items-center space-x-1">
                                <span className='mt-8 lg:mt-0'><BiMessageDetail size={20} /></span>
                                <span className='text-white '>{q.replies.length} Replied</span>
                            </button>
                            <div className="h-6 mt-6 border-l border-white lg:mt-0"></div>

                            <button onClick={(e) => { e.stopPropagation(); handleUpvote(q._id); }} className="flex items-center space-x-1">
                                <span className='mt-6 lg:mt-1'><BiSolidUpArrow size={20} /></span>
                                <span className='pl-2 pr-4'>{q.upvotes.length} Upvoted</span>
                                <div className="h-6 mt-6 border-l border-white lg:mt-0"></div>
                            </button>
                            <button onClick={(e) => { e.stopPropagation(); handleDownvote(q._id); }} className="flex items-center space-x-1">
                                <span className='mt-6 lg:mt-1'><BiSolidDownArrow size={20} /></span>
                                <span className='pl-2 pr-4'>{q.downvotes.length} Downvoted</span>
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            <div className="flex justify-between items-center w-full max-w-[900px] mt-4">
                <button
                    className="px-4 py-2 text-white bg-blue-600 rounded-lg"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Back
                </button>
                <div className="flex space-x-2">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            className={`px-4 py-2 rounded-lg ${currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                            onClick={() => setCurrentPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
                <button
                    className="px-4 py-2 text-white bg-blue-600 rounded-lg"
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="relative w-full max-w-[1366px]"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center"
            >
                {user ? (
                    <>
                        <div className="absolute -right-[10px] -top-[10px]">
                            <button onClick={closeModal} className="text-white">
                                <IoClose className="w-16 h-16" />
                            </button>
                        </div>
                        <div className="relative bg-black/80 border-2 border-white/10 rounded-lg p-8 max-w-[calc(100vw-20rem)] h-[30rem] w-full mx-auto overflow-y-hidden">
                            <h2 className="mb-4 text-white">Your question</h2>
                            <textarea
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                placeholder="Write the query here"
                                rows={5}
                                className="w-full bg-[#333] border-2 border-white/10 focus:border-white/20 h-[20rem] text-white p-4 rounded-lg"
                            />
                            <div className="flex justify-center mt-4">
                                <button onClick={handleQuestionSubmit} className="px-6 py-3 text-white bg-blue-600 rounded-lg">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="absolute -right-[130px] -top-[80px]">
                            <button onClick={closeModal} className="text-white">
                                <IoClose className="w-16 h-16" />
                            </button>
                        </div>
                        <div className="flex flex-col items-center space-y-10 bg-[#1A1A1A] rounded-lg p-8 max-w-[500px] w-full mx-auto">
                            <h2 className="text-4xl font-bold text-white">Login to ask</h2>
                            <p className="text-[#B7B7B7] text-lg font-bold">Continue with</p>
                            <button onClick={signInWithGoogle} className="px-8 py-4 bg-white">
                                <img
                                    className="bg-white"
                                    src="https://developers.google.com/identity/images/g-logo.png"
                                    alt="Google"
                                    style={{ width: '50px', height: '50px', background: 'white' }}
                                />
                            </button>
                            <button onClick={signInWithGoogle} className="bg-[#0366FF] text-white px-6 py-3 mt-16 rounded-lg w-full">
                                Log in
                            </button>
                        </div>
                    </>
                )}
            </Modal>
        </div>
    );
};

export default Forum;
