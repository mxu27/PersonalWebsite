import { useState } from 'react';
import Modal from '../components/Modal.jsx';
import BadmintonPortal from '../portals/badmintonPortal.jsx';

function Hobbies() {
    const [badmintonModalOpen, setBadmintonModalOpen] = useState(false);

    return (
        <div className="w-full">
            <header className="mb-12">
                <h1 className="text-4xl font-bold tracking-tight text-white">Hobbies</h1>
                <p className="mt-2 text-lg text-slate-400">
                    Apart from hitting the books and coding random side projects, here
                    are some of my hobbies that I enjoy.
                </p>
            </header>
            <section className="mb-10">
                <p className="text-slate-400 leading-relaxed">
                    I've always been a very competitive person since childhood. Part of that has to do with me growing up playing{' '}
                    <button
                        type="button"
                        onClick={() => setBadmintonModalOpen(true)}
                        className="text-sky-400 hover:underline cursor-pointer bg-transparent border-none p-0 font-inherit"
                    >
                        badminton
                    </button>
                    . I've been playing{' '}
                    <button
                        type="button"
                        onClick={() => setBadmintonModalOpen(true)}
                        className="text-sky-400 hover:underline cursor-pointer bg-transparent border-none p-0 font-inherit"
                    >
                        badminton
                    </button>
                    {' '}since I was 8 years old, and I've been playing competitively since I was 10 years old.{' '}
                    I've won numerous national level tournaments, won the XXIX Pan Am Junior Championships, and qualified for the 2023 World Junior Championships. Now in college, I've continued to play{' '}
                    <button
                        type="button"
                        onClick={() => setBadmintonModalOpen(true)}
                        className="text-sky-400 hover:underline cursor-pointer bg-transparent border-none p-0 font-inherit"
                    >
                        badminton
                    </button>
                    , and I'm currently representing Washington University in the collegiate badminton scene.
                </p>
            </section>
            <Modal open={badmintonModalOpen} onClose={() => setBadmintonModalOpen(false)}>
                <BadmintonPortal />
            </Modal>
        </div>

    )
}

export default Hobbies