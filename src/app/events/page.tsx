"use client"

import React, { useRef } from 'react'
import NavBar from '@/app/components/NavBar'
import Footer from '@/app/components/Footer'

interface EventType {
    id: number;
    title: string;
    date: string;
    location: string;
    description: string;
}


const events: EventType[] = [
    { id: 1, title: 'Event 1', date: '2021-10-10', location: 'Location 1', description: 'Description 1' },
    { id: 2, title: 'Event 2', date: '2021-10-11', location: 'Location 2', description: 'Description 2' },
    { id: 3, title: 'Event 3', date: '2021-10-12', location: 'Location 3', description: 'Description 3' },
    { id: 4, title: 'Event 4', date: '2021-10-13', location: 'Location 4', description: 'Description 4' },
    { id: 5, title: 'Event 5', date: '2021-10-14', location: 'Location 5', description: 'Description 5' },
    { id: 6, title: 'Event 6', date: '2021-10-15', location: 'Location 6', description: 'Description 6' },
    { id: 7, title: 'Event 7', date: '2021-10-16', location: 'Location 7', description: 'Description 7' },
    { id: 8, title: 'Event 8', date: '2021-10-17', location: 'Location 8', description: 'Description 8' },
    { id: 9, title: 'Event 9', date: '2021-10-18', location: 'Location 9', description: 'Description 9' },
    { id: 10, title: 'Event 10', date: '2021-10-19', location: 'Location 10', description: 'Description 10' },
];


export default function Events() {

    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    }

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    }

    return (
        <div className='flex flex-col'>
            <NavBar />
            <div className='flex flex-col items-center'>
                <div className='font-bold text-3xl h-auto rounded-xl pt-11 pb-2 '>
                    <h1>Young Viet Events</h1>
                </div>
                <div className=' h-auto rounded-xl pb-9'>
                    <p>Celebrate, Connect, and Create Memories with Us!</p>
                </div>
            </div>

            <div className='flex items-center bg-black py-100 space-y-6 rounded-xl'>
                <div className='bg-white w-1/2 m-5 '>
                    <p>Upcoming Events</p>
                </div>
                <div className='bg-white w-1/2 m-5'>
                    <p>Past Events</p>
                </div>
            </div>

            <div className='max-w-7xl mx-uto px-6 py-12'>
                <h2 className='text-3xl font-bold mb-6'>Coming Events</h2>

                <div className='realtive'>
                    <button onClick={scrollLeft} className='absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2'> {'<'} </button>
                </div>
                <button
                    onClick={scrollRight}
                    className="justify-right top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full"
                >
                    {'>'}
                </button>

                <div ref={scrollRef} className='flex space-x-4 overflow-x-scroll'>
                    {events.map((event) => (
                        <div key={event.id} className='w-96 bg-white rounded-xl p-4'>
                            <div className='bg-yellow-100 h-32 flex items-center justify-center rounded-lg'>
                                <p className='text-lg font-semibold'>Events Image</p>
                            </div>
                            <h3>{event.title}</h3>
                            <p>{event.date}</p>
                            <p>{event.location}</p>
                            <p>{event.description}</p>
                            <button className='mt-4 bg-yellow-300 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400'>RSVP</button>
                        </div>
                    ))}
                </div>



            </div>
            <Footer />
        </div>
    )
}
