import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BiMessageDetail } from 'react-icons/bi';
import { BiSolidUpArrow, BiSolidDownArrow } from 'react-icons/bi';

const QuestionDetail = () => {
    const { questionId } = useParams();
    const [questionDetails, setQuestionDetails] = useState(null);

    useEffect(() => {
        fetchQuestionDetails();
    }, [questionId]);

    const fetchQuestionDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/questions/${questionId}`);
            setQuestionDetails(response.data);
        } catch (error) {
            console.error('Error fetching question details:', error);
        }
    };

    if (!questionDetails) return <div>Loading...</div>;

    return (
        <div className='flex flex-col items-start w-full lg:items-center lg:justify-center'>
            <div className="flex flex-col items-center justify-center w-full max-w-[900px]">
                <div className="flex flex-col w-full max-w-[1366px] p-4 lg:p-6">
                    <h1 className="mb-6 ml-2 text-xl font-bold text-white lg:ml-8 lg:text-2xl">{questionDetails.userName}'s Replied</h1>
                    <div className='bg-[#1A1A1A] text-white rounded-lg p-4 lg:p-8 ml-2 lg:ml-6 w-full h-auto'>
                        <div className="flex justify-between">
                            <div className="flex items-center space-x-4">
                                <img src={questionDetails.userProfilePic} alt="Profile" className="w-8 h-8 rounded-full lg:w-10 lg:h-10" />
                                <p className="text-base font-bold lg:text-lg">{questionDetails.userName}</p>
                            </div>
                            <div className="text-sm lg:text-base font-bold text-[#7A757D] flex flex-col items-end">
                                <span>{new Date(questionDetails.timestamp).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                                <span>{new Date(questionDetails.timestamp).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}</span>
                            </div>
                        </div>
                        <p className="my-4 text-sm lg:text-base">{questionDetails.question}</p>
                        <div className="flex space-x-4">
                            <button className="flex items-center space-x-1">
                                <span className='mt-8 lg:mt-0'><BiMessageDetail size={20} /></span>
                                <span className='text-white'>{questionDetails.replies.length} Replied</span>
                            </button>
                            <button className="flex items-center space-x-1">
                                <span className='mt-6 lg:mt-1'><BiSolidUpArrow size={20} /></span>
                                <span className='pl-2 pr-4'>{questionDetails.upvotes.length} Upvote</span>
                                <div className="h-6 mt-8 border-l border-white lg:mt-0"></div>
                            </button>
                            <button className="flex items-center space-x-1">
                                <span className='mt-6 lg:mt-1'><BiSolidDownArrow size={20} /></span>
                                <span className='pl-2 pr-4'>{questionDetails.downvotes.length} Downvote</span>
                            </button>
                        </div>
                    </div>

                    <div className="w-full mt-4">
                        {questionDetails.replies && questionDetails.replies.map((reply, index) => (
                            <div key={index} className="bg-[#1A1A1A] text-white rounded-lg p-4 my-4 ml-2 lg:ml-6 w-full h-auto">
                                <div className="flex justify-between">
                                    <div className="flex items-center space-x-4">
                                        <img src={reply.userProfilePic || '/default-profile-pic.jpg'} alt="Admin Profile" className="w-8 h-8 rounded-full lg:w-10 lg:h-10" />
                                        <p className="text-base font-bold lg:text-lg">{reply.userName || 'Admin'}</p>
                                    </div>
                                    <div className="text-sm lg:text-base font-bold text-[#7A757D] flex flex-col items-end">
                                        <span>{new Date(reply.timestamp).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                                        <span>{new Date(reply.timestamp).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}</span>
                                    </div>
                                </div>
                                <p className="my-4 text-sm lg:text-base">{reply.text}</p>
                                <div className="flex space-x-4">
                                    <button className="flex items-center space-x-1">
                                        <span className='mt-8 lg:mt-0'><BiMessageDetail size={20} /></span>
                                        <span className='mt-8 text-white lg:mt-0'>Replied</span>
                                    </button>
                                    <button className="flex items-center space-x-1">
                                        <span className='mt-6 lg:mt-1'><BiSolidUpArrow size={20} /></span>
                                        <span className='pl-2 pr-4'>{reply.upvotes || 0} Upvote</span>
                                        <div className="h-6 mt-8 border-l border-white lg:mt-0"></div>
                                    </button>
                                    <button className="flex items-center space-x-1">
                                        <span className='mt-6 lg:mt-1'><BiSolidDownArrow size={20} /></span>
                                        <span className='pl-2 pr-4'>{reply.downvotes || 0} Downvote</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

};

export default QuestionDetail;
