import React from 'react';
import './Form.css';

const Form = () => {
    return (
        <div className='form-container'>
            <form>
                <div className='form-group'> 
                <label>First name:</label>
                <input type="text" />
                </div>
                <div className='form-group'> 
                <label>Last name:</label>
                <input type="text" />
                </div>
                <div className='form-group'> 
                <label>Phone:</label>
                <input type="number" />
                </div>
                <div className='form-group'> 
                <label>Role:</label>
                <select name="selectedRole">
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                    <option value="other">Other</option>
                </select>
                <label for="message" className="form-label">Message</label>
                <textarea className="form-control" name="message" placeholder="Enter Message..."></textarea>
                </div>
                <div>
                <button type="submit" className="btn">Send</button>
            </div>
            </form>
        </div>
    );
};

export default Form;